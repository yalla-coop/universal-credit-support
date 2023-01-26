BEGIN;

ALTER TABLE "steps_i18n"
  DROP COLUMN "all_fields_translated";

COMMIT;