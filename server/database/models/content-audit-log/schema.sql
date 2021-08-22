DROP TABLE IF EXISTS "content_audit_log" CASCADE;

-- NOTE@Joe: when you create content either for steps or for landingpage tables,
-- please create one log for each here with user_id = null and type = ADD
-- so in future we'd know a full log of everything changed
-- REMOVE THIS COMMENT AFTER DOING IT :)

CREATE TABLE "content_audit_log" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER REFERENCES users(id),
  "step_id" INTEGER REFERENCES steps(id),
  "landing_page_content_id" INTEGER REFERENCES landing_page_content(id),
  "type" content_audit_log_types NOT NULL,
  "updated_content" JSON,
    -- { 
    --   type: 'STEP', // ['STEP', 'LANDING']
    --   content_id: '',
    --   title: '',
    --   ...all_setp_or_landing_content_here
    -- }

  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "content_audit_log"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();