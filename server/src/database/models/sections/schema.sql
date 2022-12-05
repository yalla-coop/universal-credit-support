DROP TABLE IF EXISTS "sections" CASCADE;

CREATE TABLE "sections" (
  "id" SERIAL PRIMARY KEY,
  "parent_section_id" INTEGER,
  "title" VARCHAR(255),
  "default_position" INTEGER, -- not null for default sections

  "created_by" INTEGER REFERENCES users(id),
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_by" INTEGER REFERENCES users(id),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

ALTER TABLE "sections"
  ADD CONSTRAINT section_parent_section_id_fkey FOREIGN KEY (parent_section_id) REFERENCES sections (id);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "sections"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();