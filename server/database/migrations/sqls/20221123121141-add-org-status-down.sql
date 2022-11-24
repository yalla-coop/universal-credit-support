BEGIN;

ALTER TABLE "organisations" DROP COLUMN "status";
DROP TYPE IF EXISTS organisation_statuses CASCADE;

COMMIT;