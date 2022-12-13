BEGIN;

ALTER TABLE "users" DROP CONSTRAINT "users_backup_email_key";

COMMIT;