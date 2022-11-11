DROP TABLE IF EXISTS "organisations_sections_orders" CASCADE;

CREATE TABLE "organisations_sections_orders" (
  "id" SERIAL PRIMARY KEY,
  "section_id" INTEGER REFERENCES sections(id),
  "organisation_id" INTEGER REFERENCES organisations(id),
  "position" INTEGER NOT NULL,
  "hidden" BOOLEAN DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "organisations_sections_orders"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();