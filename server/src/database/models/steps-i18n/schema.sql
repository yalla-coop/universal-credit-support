DROP TABLE IF EXISTS "steps_i18n" CASCADE;

CREATE TABLE "steps_i18n" (
  "id" SERIAL PRIMARY KEY,
  "step_id" INTEGER NOT NULL REFERENCES steps(id) ON DELETE CASCADE,
  "language_code" language_codes NOT NULL,
  "title" TEXT,
  "description" TEXT,
  "page_title" TEXT,
  "page_description" TEXT,
  "how_long_does_it_take" JSONB,
  "where_do_you_need_to_go" JSONB,
  "things_you_will_need" JSONB[],
  "what_you_will_need_to_know" JSONB[],
  "top_tip" TEXT,
  "other_tips" TEXT[],
  "all_fields_translated" BOOLEAN DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX
  step_id_language_code ON steps_i18n
  (step_id, language_code);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "steps_i18n"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
