BEGIN;

ALTER TABLE "users" ADD CONSTRAINT "users_backup_email_key" UNIQUE ("backup_email");

COMMIT;