DROP TABLE IF EXISTS "sections_i18n" CASCADE;

CREATE TABLE "sections_i18n" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(255),
  "section_id" INTEGER NOT NULL REFERENCES sections(id) ON DELETE CASCADE,
  "language_code" language_codes NOT NULL,

  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX
  section_id_language_code ON sections_i18n
  (section_id, language_code);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "sections_i18n"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();