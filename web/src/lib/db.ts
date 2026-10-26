import mysql, { type Pool, type ResultSetHeader, type RowDataPacket } from "mysql2/promise";
import type { QuoteInput } from "./quote-schema";

/** Lead workflow statuses for the staff dashboard. */
export const QUOTE_STATUSES = [
  "new",
  "contacted",
  "quoted",
  "booked",
  "completed",
  "declined",
  "spam",
] as const;
export type QuoteStatus = (typeof QUOTE_STATUSES)[number];

export const QUOTE_PRIORITIES = ["normal", "urgent"] as const;
export type QuotePriority = (typeof QUOTE_PRIORITIES)[number];

export type QuoteLeadRow = {
  id: number;
  reference: string;
  service: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  job_date: string;
  message: string | null;
  bed_study: string | null;
  bathroom: string | null;
  living_area: string | null;
  furnished: string | null;
  house_type: string | null;
  blinds: string | null;
  extras: unknown;
  hours: string | null;
  ip: string | null;
  status: QuoteStatus;
  priority: QuotePriority;
  quoted_amount: string | number | null;
  assigned_to: string | null;
  internal_notes: string | null;
  source: string;
  contacted_at: Date | string | null;
  updated_at: Date | string;
  created_at: Date | string;
};

let pool: Pool | null = null;
let ensured = false;

export function isDbConfigured() {
  return Boolean(
    process.env.DB_HOST &&
      process.env.DB_USER &&
      process.env.DB_PASSWORD &&
      process.env.DB_NAME
  );
}

function getPool() {
  if (!isDbConfigured()) return null;
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 5,
      namedPlaceholders: true,
    });
  }
  return pool;
}

async function addColumnIfMissing(db: Pool, ddl: string) {
  try {
    await db.execute(ddl);
  } catch (err) {
    const e = err as { errno?: number; code?: string };
    // Duplicate column name
    if (e.errno === 1060 || e.code === "ER_DUP_FIELDNAME") return;
    throw err;
  }
}

async function addIndexIfMissing(db: Pool, ddl: string) {
  try {
    await db.execute(ddl);
  } catch (err) {
    const e = err as { errno?: number; code?: string };
    // Duplicate key name
    if (e.errno === 1061 || e.code === "ER_DUP_KEYNAME") return;
    throw err;
  }
}

async function ensureTable(db: Pool) {
  if (ensured) return;

  await db.execute(`
    CREATE TABLE IF NOT EXISTS quote_leads (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
      reference VARCHAR(32) NOT NULL,
      service VARCHAR(32) NOT NULL,
      name VARCHAR(200) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(64) NOT NULL,
      location VARCHAR(255) NOT NULL,
      job_date VARCHAR(64) NOT NULL,
      message TEXT NULL,
      bed_study VARCHAR(64) NULL,
      bathroom VARCHAR(64) NULL,
      living_area VARCHAR(64) NULL,
      furnished VARCHAR(32) NULL,
      house_type VARCHAR(64) NULL,
      blinds VARCHAR(64) NULL,
      extras JSON NULL,
      hours VARCHAR(32) NULL,
      ip VARCHAR(64) NULL,
      status VARCHAR(32) NOT NULL DEFAULT 'new',
      priority VARCHAR(16) NOT NULL DEFAULT 'normal',
      quoted_amount DECIMAL(10,2) NULL,
      assigned_to VARCHAR(120) NULL,
      internal_notes TEXT NULL,
      source VARCHAR(64) NOT NULL DEFAULT 'website',
      contacted_at DATETIME NULL,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      UNIQUE KEY uq_quote_reference (reference),
      KEY idx_quote_created (created_at),
      KEY idx_quote_status (status),
      KEY idx_quote_priority (priority)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);

  // Upgrade tables created before dashboard columns existed.
  await addColumnIfMissing(db, `ALTER TABLE quote_leads ADD COLUMN status VARCHAR(32) NOT NULL DEFAULT 'new'`);
  await addColumnIfMissing(db, `ALTER TABLE quote_leads ADD COLUMN priority VARCHAR(16) NOT NULL DEFAULT 'normal'`);
  await addColumnIfMissing(db, `ALTER TABLE quote_leads ADD COLUMN quoted_amount DECIMAL(10,2) NULL`);
  await addColumnIfMissing(db, `ALTER TABLE quote_leads ADD COLUMN assigned_to VARCHAR(120) NULL`);
  await addColumnIfMissing(db, `ALTER TABLE quote_leads ADD COLUMN internal_notes TEXT NULL`);
  await addColumnIfMissing(db, `ALTER TABLE quote_leads ADD COLUMN source VARCHAR(64) NOT NULL DEFAULT 'website'`);
  await addColumnIfMissing(db, `ALTER TABLE quote_leads ADD COLUMN contacted_at DATETIME NULL`);
  await addColumnIfMissing(
    db,
    `ALTER TABLE quote_leads ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`
  );
  await addIndexIfMissing(db, `ALTER TABLE quote_leads ADD KEY idx_quote_status (status)`);
  await addIndexIfMissing(db, `ALTER TABLE quote_leads ADD KEY idx_quote_priority (priority)`);

  ensured = true;
}

export async function saveQuoteLead(
  reference: string,
  data: QuoteInput,
  ip: string
): Promise<{ id: number } | null> {
  const db = getPool();
  if (!db) return null;

  await ensureTable(db);

  const extras = data.service === "bond" ? JSON.stringify(data.extras ?? []) : null;
  const [result] = await db.execute<ResultSetHeader>(
    `INSERT INTO quote_leads (
      reference, service, name, email, phone, location, job_date, message,
      bed_study, bathroom, living_area, furnished, house_type, blinds, extras, hours, ip,
      status, priority, source
    ) VALUES (
      :reference, :service, :name, :email, :phone, :location, :jobDate, :message,
      :bedStudy, :bathroom, :livingArea, :furnished, :houseType, :blinds, :extras, :hours, :ip,
      :status, :priority, :source
    )`,
    {
      reference,
      service: data.service,
      name: data.name,
      email: data.email,
      phone: data.phone,
      location: data.location,
      jobDate: data.jobDate,
      message: data.message || null,
      bedStudy: data.service === "bond" ? data.bedStudy : null,
      bathroom: data.service === "bond" ? data.bathroom : null,
      livingArea: data.service === "bond" ? data.livingArea : null,
      furnished: data.service === "bond" ? data.furnished : null,
      houseType: data.service === "bond" ? data.houseType : null,
      blinds: data.service === "bond" ? data.blinds : null,
      extras,
      hours: data.service === "spring" ? data.hours : null,
      ip,
      status: "new" satisfies QuoteStatus,
      priority: "normal" satisfies QuotePriority,
      source: "website",
    }
  );

  return { id: result.insertId };
}

export async function listQuoteLeads(opts?: {
  status?: string;
  limit?: number;
}): Promise<QuoteLeadRow[]> {
  const db = getPool();
  if (!db) return [];
  await ensureTable(db);

  const limit = Math.min(Math.max(opts?.limit ?? 100, 1), 300);
  const status = opts?.status?.trim();

  if (status && status !== "all") {
    const [rows] = await db.execute<RowDataPacket[]>(
      `SELECT * FROM quote_leads WHERE status = :status ORDER BY created_at DESC LIMIT ${limit}`,
      { status }
    );
    return rows as QuoteLeadRow[];
  }

  const [rows] = await db.execute<RowDataPacket[]>(
    `SELECT * FROM quote_leads ORDER BY created_at DESC LIMIT ${limit}`
  );
  return rows as QuoteLeadRow[];
}

export type QuoteLeadUpdate = {
  status?: QuoteStatus;
  priority?: QuotePriority;
  quoted_amount?: number | null;
  assigned_to?: string | null;
  internal_notes?: string | null;
  contacted_at?: string | null;
};

export async function updateQuoteLead(id: number, patch: QuoteLeadUpdate): Promise<boolean> {
  const db = getPool();
  if (!db) return false;
  await ensureTable(db);

  const fields: string[] = [];
  const params: Record<string, unknown> = { id };

  if (patch.status !== undefined) {
    fields.push("status = :status");
    params.status = patch.status;
    if (patch.status === "contacted" && patch.contacted_at === undefined) {
      fields.push("contacted_at = COALESCE(contacted_at, NOW())");
    }
  }
  if (patch.priority !== undefined) {
    fields.push("priority = :priority");
    params.priority = patch.priority;
  }
  if (patch.quoted_amount !== undefined) {
    fields.push("quoted_amount = :quotedAmount");
    params.quotedAmount = patch.quoted_amount;
  }
  if (patch.assigned_to !== undefined) {
    fields.push("assigned_to = :assignedTo");
    params.assignedTo = patch.assigned_to;
  }
  if (patch.internal_notes !== undefined) {
    fields.push("internal_notes = :internalNotes");
    params.internalNotes = patch.internal_notes;
  }
  if (patch.contacted_at !== undefined) {
    fields.push("contacted_at = :contactedAt");
    params.contactedAt = patch.contacted_at;
  }

  if (!fields.length) return false;

  const [result] = await db.execute<ResultSetHeader>(
    `UPDATE quote_leads SET ${fields.join(", ")} WHERE id = :id`,
    params as Record<string, string | number | null>
  );
  return result.affectedRows > 0;
}
