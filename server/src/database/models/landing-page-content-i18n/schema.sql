DROP TABLE IF EXISTS "landing_page_content_i18n" CASCADE;

CREATE TABLE "landing_page_content_i18n" (
  "id" SERIAL PRIMARY KEY,
  "landing_page_content_id" INTEGER NOT NULL REFERENCES landing_page_content(id) ON DELETE CASCADE,
  "language_code" language_codes NOT NULL,
  "headline" TEXT,
  "subtitle" TEXT,
  "instructions" TEXT,

  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX
  landing_page_content_id_language_code ON landing_page_content_i18n
  (landing_page_content_id, language_code);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "landing_page_content_i18n"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
