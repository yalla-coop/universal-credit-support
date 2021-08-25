DROP TABLE IF EXISTS "organisations" CASCADE;

CREATE TABLE "organisations" (
  "id" SERIAL PRIMARY KEY,
  "organisation_name" VARCHAR(50),
  "type_of_organisation" TEXT NOT NULL,
  "unique_slug" VARCHAR UNIQUE NOT NULL,
  "contact_links" JSON[],
    -- [
    --   {
    --     type: '', //[PHONE, WEBCHAT_LINK, EMAIL]
    --     availability: '', //e.g. Monday to Friday (9am to 5pm)
    --     description: '',
    --     link: ''
    --     phone_number: ''
    --     email: ''
    --   }
    -- ]
  "benefit_calculator_link" TEXT,
  "benefit_calculator_label" VARCHAR,
  "logo_id" INTEGER REFERENCES media(id),
  "colors" JSON,
    -- { 
    --   main: '#222',
    --   secondary: '#202020',
    --   neutral: '#2332ff'
    -- }
  
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