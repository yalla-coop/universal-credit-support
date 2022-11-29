DROP TABLE IF EXISTS "common" CASCADE;

CREATE TABLE "common" (
  "id" SERIAL PRIMARY KEY,
  "content" JSONB,
-- {
--   "title": "string",
--   "content": "string",
--   "tip1": "string",
--   "tip2": "string",
--   resources: [
--     {
--       "type": "string", // external, internal
--       "lable": "string",
--       "url": "string"
--     }
--   ]
-- }

  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "common"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
