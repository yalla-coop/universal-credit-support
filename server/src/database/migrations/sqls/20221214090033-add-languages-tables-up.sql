BEGIN;

CREATE TYPE language_codes AS ENUM('af','sq','am','ar','hy','az','bn','bs','bg','zh','hr','cs','da','nl','en','et','fa','tl','fi','fr','ka','de','el','gu','ht','he','hi','hu','is','id','ga','it','ja','kk','ko','lv','lt','mk','ms','ml','mt','mr','mn','no','ps','pl','pt','pa','ro','ru','sr','si','sk','sl','so','es','sw','sv','ta','te','th','tr','uk','ur','uz','vi','cy');

DROP TABLE IF EXISTS "common" CASCADE;

CREATE TABLE "common" (
  "id" SERIAL PRIMARY KEY,
  "content" JSONB,

  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "common"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

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

-- trgger to delete old steps translations if the english content is updated

CREATE OR REPLACE FUNCTION delete_old_steps_i18n_on_update_content_fn()
RETURNS TRIGGER AS $$
BEGIN
  IF (
    OLD.title != NEW.title
    OR OLD.description != NEW.description
    OR OLD.page_title != NEW.page_title
    OR OLD.page_description != NEW.page_description
    OR TRIM(OLD.how_long_does_it_take::text, '"') != TRIM(NEW.how_long_does_it_take::text, '"')
    OR TRIM(OLD.where_do_you_need_to_go::text, '"') != TRIM(NEW.where_do_you_need_to_go::text, '"')
    OR TRIM(OLD.things_you_will_need::text, '"') != TRIM(NEW.things_you_will_need::text, '"')
    OR TRIM(OLD.what_you_will_need_to_know::text, '"') != TRIM(NEW.what_you_will_need_to_know::text, '"')
    OR OLD.top_tip != NEW.top_tip
    OR TRIM(OLD.other_tips::text, '"') != TRIM(NEW.other_tips::text, '"')
  ) THEN
    DELETE FROM steps_i18n WHERE step_id = OLD.id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER delete_old_steps_i18n_on_update_content_tr
  AFTER UPDATE ON steps
    FOR EACH ROW
      EXECUTE PROCEDURE delete_old_steps_i18n_on_update_content_fn();

DROP TABLE IF EXISTS "landing_page_content_i18n" CASCADE;

CREATE TABLE "landing_page_content_i18n" (
  "id" SERIAL PRIMARY KEY,
  "landing_page_content_id" INTEGER NOT NULL REFERENCES landing_page_content(id) ON DELETE CASCADE,
  "language_code" language_codes NOT NULL,
  "headline" TEXT,
  "subtitle" TEXT,
  "instructions" TEXT,

  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX
  landing_page_content_id_language_code ON landing_page_content_i18n
  (landing_page_content_id, language_code);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "landing_page_content_i18n"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

-- trgger to delete old landing_page_content translations if the english content is updated

CREATE OR REPLACE FUNCTION delete_old_landing_page_content_i18n_on_update_content_fn()
RETURNS TRIGGER AS $$
BEGIN
  IF (
    OLD.headline != NEW.headline
    OR OLD.subtitle != NEW.subtitle
    OR OLD.instructions != NEW.instructions
  ) THEN
    DELETE FROM landing_page_content_i18n WHERE landing_page_content_id = OLD.id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER delete_old_landing_page_content_i18n_on_update_content_tr
  AFTER UPDATE ON landing_page_content
    FOR EACH ROW
      EXECUTE PROCEDURE delete_old_landing_page_content_i18n_on_update_content_fn();
DROP TABLE IF EXISTS "common_i18n" CASCADE;

CREATE TABLE "common_i18n" (
  "id" SERIAL PRIMARY KEY,
  "common_id" INTEGER NOT NULL REFERENCES common(id) ON DELETE CASCADE,
  "language_code" language_codes NOT NULL,
  "content" JSONB,
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

CREATE OR REPLACE FUNCTION delete_old_common_i18n_on_update_content_fn()
RETURNS TRIGGER AS $$
BEGIN
  IF (trim(OLD.content::text, '"') != trim(NEW.content::text, '"')) THEN
    DELETE FROM common_i18n WHERE common_id = OLD.id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER delete_old_common_i18n_on_update_content_tr
  AFTER UPDATE OF content ON common
    FOR EACH ROW
      EXECUTE PROCEDURE delete_old_common_i18n_on_update_content_fn();

COMMIT;