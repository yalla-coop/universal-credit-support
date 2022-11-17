DROP TABLE IF EXISTS "topics_i18n" CASCADE;

CREATE TABLE "topics_i18n" (
  "id" SERIAL PRIMARY KEY,
  "topic_id" INTEGER REFERENCES topics(id),
  "language_code" VARCHAR NOT NULL,
  "content_i18n" JSONB,
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

CREATE UNIQUE INDEX
  topic_id_language_code ON topics_i18n
  (topic_id, language_code);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "topics_i18n"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
