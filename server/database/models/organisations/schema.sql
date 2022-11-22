DROP TABLE IF EXISTS "organisations" CASCADE;

CREATE TABLE "organisations" (
  "id" SERIAL PRIMARY KEY,
  "organisation_name" VARCHAR(50),
  "type_of_organisation" TEXT NOT NULL,
  "unique_slug" VARCHAR UNIQUE NOT NULL,
  "still_need_help_phone_number" VARCHAR(50),
  "still_need_help_label" VARCHAR(50),
  "logo_id" INTEGER REFERENCES media(id),
  "colors" JSON,
    -- { 
    --   main: '#222',
    --   secondary: '#202020',
    --   neutral: '#2332ff'
    -- }

    -- { 
    --   main: {
    --     h: 0,
    --     s: 0,
    --     l: .20,
    --     a: 1,
    --   },
    --   secondary: '#202020',
    --   neutral: '#2332ff'
    -- }
  "status" organisation_statuses DEFAULT 'AWAITING_APPROVAL',
  "num_of_claims_process_started" INTEGER DEFAULT 0,
  "num_of_claims_process_completed" INTEGER DEFAULT 0,
  "num_of_visitors" INTEGER DEFAULT 0,

  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "organisations"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();