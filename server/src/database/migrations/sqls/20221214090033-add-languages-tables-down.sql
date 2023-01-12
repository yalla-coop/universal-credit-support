BEGIN;

DROP TABLE IF EXISTS "steps_i18n" CASCADE;

DROP FUNCTION IF EXISTS delete_old_steps_i18n_on_update_content_fn() CASCADE;
DROP TRIGGER IF EXISTS delete_old_steps_i18n_on_update_content_tr 
  ON steps CASCADE;

DROP TABLE IF EXISTS "landing_page_content_i18n" CASCADE;

DROP FUNCTION IF EXISTS delete_old_landing_page_content_i18n_on_update_content_fn() CASCADE;
DROP TRIGGER IF EXISTS delete_old_landing_page_content_i18n_on_update_content_tr 
  ON landing_page_content CASCADE;
DROP TABLE IF EXISTS "common_i18n" CASCADE;


DROP FUNCTION IF EXISTS delete_old_common_i18n_on_update_content_fn() CASCADE;
DROP TRIGGER IF EXISTS delete_old_common_i18n_on_update_content_tr 
  ON common CASCADE;

DROP TABLE IF EXISTS "common" CASCADE;

DROP TYPE IF EXISTS language_codes CASCADE;

COMMIT;