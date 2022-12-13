DROP TABLE IF EXISTS "landing_page_content" CASCADE;

CREATE TABLE "landing_page_content" (
  "id" SERIAL PRIMARY KEY,
  "headline" TEXT,
  "subtitle" TEXT,
  "instructions" TEXT,

  "created_by" INTEGER REFERENCES users(id),
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_by" INTEGER REFERENCES users(id),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "landing_page_content"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();