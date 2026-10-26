import { NextResponse } from "next/server";
import {
  isDbConfigured,
  QUOTE_PRIORITIES,
  QUOTE_STATUSES,
  updateQuoteLead,
  type QuotePriority,
  type QuoteStatus,
} from "@/lib/db";

export async function PATCH(
  req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  if (!isDbConfigured()) {
    return NextResponse.json({ error: "Database is not configured." }, { status: 503 });
  }

  const { id: idRaw } = await ctx.params;
  const id = Number(idRaw);
  if (!Number.isFinite(id) || id < 1) {
    return NextResponse.json({ error: "Invalid lead id." }, { status: 400 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const patch: {
    status?: QuoteStatus;
    priority?: QuotePriority;
    quoted_amount?: number | null;
    assigned_to?: string | null;
    internal_notes?: string | null;
  } = {};

  if (typeof body.status === "string") {
    if (!(QUOTE_STATUSES as readonly string[]).includes(body.status)) {
      return NextResponse.json({ error: "Invalid status." }, { status: 400 });
    }
    patch.status = body.status as QuoteStatus;
  }
  if (typeof body.priority === "string") {
    if (!(QUOTE_PRIORITIES as readonly string[]).includes(body.priority)) {
      return NextResponse.json({ error: "Invalid priority." }, { status: 400 });
    }
    patch.priority = body.priority as QuotePriority;
  }
  if (body.quoted_amount === null || body.quoted_amount === "") {
    patch.quoted_amount = null;
  } else if (body.quoted_amount !== undefined) {
    const n = Number(body.quoted_amount);
    if (!Number.isFinite(n)) {
      return NextResponse.json({ error: "Invalid quoted amount." }, { status: 400 });
    }
    patch.quoted_amount = n;
  }
  if (typeof body.assigned_to === "string" || body.assigned_to === null) {
    patch.assigned_to = body.assigned_to === null ? null : String(body.assigned_to).slice(0, 120);
  }
  if (typeof body.internal_notes === "string" || body.internal_notes === null) {
    patch.internal_notes =
      body.internal_notes === null ? null : String(body.internal_notes).slice(0, 5000);
  }

  try {
    const ok = await updateQuoteLead(id, patch);
    if (!ok) return NextResponse.json({ error: "Lead not found or nothing to update." }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[bcs-ops] update lead failed", id, err);
    return NextResponse.json({ error: "Could not update lead." }, { status: 500 });
  }
}
