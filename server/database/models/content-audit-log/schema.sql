DROP TABLE IF EXISTS "content_audit_log" CASCADE;

-- When super admin updates the default sections
CREATE TABLE "content_audit_log" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER REFERENCES users(id),
  "section_id" INTEGER REFERENCES sections(id),
  "type" content_audit_log_operations NOT NULL,
  "updated_content" JSONB,
  "topics" JSONB,
    -- {
    --   title
    --   topics: [
    --     {
    --       title
    --       content
    --       ...all the fields in the topics table
    -- }

  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "content_audit_log"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();