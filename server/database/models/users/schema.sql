DROP TABLE IF EXISTS "users" CASCADE;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "organisation_id" INTEGER REFERENCES organisations(id),
  "first_name" VARCHAR(20),
  "last_name" VARCHAR(20),
  "email" VARCHAR UNIQUE,
  "backup_email" VARCHAR UNIQUE,
  "password" TEXT,
  "role" user_roles NOT NULL DEFAULT 'ADMIN',
  "status" user_statuses DEFAULT 'ACTIVE',
  
  "reset_password_token" TEXT,
  "reset_password_expiry" TIMESTAMP,

  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  constraint not_null check
  (
    CASE 
      WHEN status != 'DELETED'  THEN (
          first_name IS NOT NULL AND
          last_name IS NOT NULL AND
          email IS NOT NULL AND
          backup_email IS NOT NULL AND
          "password" IS NOT NULL
        )
      ELSE true
    END
  )
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "users"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();