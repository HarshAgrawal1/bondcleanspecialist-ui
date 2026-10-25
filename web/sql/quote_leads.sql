-- Hostinger phpMyAdmin / MySQL
-- Fresh install: run the CREATE below.
-- Already created an older quote_leads table? Run the ALTER block at the bottom.

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
  -- Dashboard / workflow fields
  status VARCHAR(32) NOT NULL DEFAULT 'new',
  -- new | contacted | quoted | booked | completed | declined | spam
  priority VARCHAR(16) NOT NULL DEFAULT 'normal',
  -- normal | urgent
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --- Upgrade from earlier schema (ignore errors if a column/index already exists) ---
-- ALTER TABLE quote_leads ADD COLUMN status VARCHAR(32) NOT NULL DEFAULT 'new';
-- ALTER TABLE quote_leads ADD COLUMN priority VARCHAR(16) NOT NULL DEFAULT 'normal';
-- ALTER TABLE quote_leads ADD COLUMN quoted_amount DECIMAL(10,2) NULL;
-- ALTER TABLE quote_leads ADD COLUMN assigned_to VARCHAR(120) NULL;
-- ALTER TABLE quote_leads ADD COLUMN internal_notes TEXT NULL;
-- ALTER TABLE quote_leads ADD COLUMN source VARCHAR(64) NOT NULL DEFAULT 'website';
-- ALTER TABLE quote_leads ADD COLUMN contacted_at DATETIME NULL;
-- ALTER TABLE quote_leads ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
-- ALTER TABLE quote_leads ADD KEY idx_quote_status (status);
-- ALTER TABLE quote_leads ADD KEY idx_quote_priority (priority);
