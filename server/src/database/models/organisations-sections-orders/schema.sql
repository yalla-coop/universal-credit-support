DROP TABLE IF EXISTS "organisations_sections_orders" CASCADE;

CREATE TABLE "organisations_sections_orders" (
  "id" SERIAL PRIMARY KEY,
  "section_id" INTEGER REFERENCES sections(id),
  "organisation_id" INTEGER REFERENCES organisations(id),
  "position" INTEGER NOT NULL,
  "hidden" BOOLEAN DEFAULT FALSE,
  "approval_status" section_approval_statuses DEFAULT 'AWAITING_APPROVAL',
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX 
  section_id_organisation_id ON organisations_sections_orders
 (section_id, organisation_id);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "organisations_sections_orders"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();