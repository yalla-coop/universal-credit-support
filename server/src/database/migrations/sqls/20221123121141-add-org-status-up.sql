BEGIN;

CREATE TYPE organisation_statuses AS ENUM('AWAITING_APPROVAL', 'APPROVED', 'REJECTED', 'DELETED');

ALTER TABLE "organisations" ADD COLUMN "status" organisation_statuses DEFAULT 'AWAITING_APPROVAL';

UPDATE "organisations" SET status = 'APPROVED';

COMMIT;