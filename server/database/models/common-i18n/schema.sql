DROP TABLE IF EXISTS "common_i18n" CASCADE;

CREATE TABLE "common_i18n" (
  "id" SERIAL PRIMARY KEY,
  "common_id" INTEGER REFERENCES common(id),
  "language_code" language_codes NOT NULL,
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
  common_id_language_code ON common_i18n
  (common_id, language_code);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "common_i18n"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
