DROP TABLE IF EXISTS "topics" CASCADE;

CREATE TABLE "topics" (
  "id" SERIAL PRIMARY KEY,
  "section_id" INTEGER REFERENCES sections(id),
  "position" INTEGER NOT NULL,
  "content" JSONB,
-- {
--   "title": "string",
--   "content": "string",
--   "tip1": "string",
--   "tip2": "string",
--   resources: [
--     {
--       "type": "string", // EXTERNAL, CUSTOM
--       "lable": "string",
--       "url": "string"
--     }
--   ]
-- }

  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "topics"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();