BEGIN;

ALTER TABLE "steps_i18n"
  ADD COLUMN "all_fields_translated" BOOLEAN DEFAULT FALSE;

UPDATE "steps_i18n"
  SET "all_fields_translated" = TRUE;

COMMIT;