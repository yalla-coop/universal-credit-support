DROP TABLE IF EXISTS "organisations_resources" CASCADE;

CREATE TABLE "organisations_resources" (
  "organisation_id" INTEGER REFERENCES organisations(id),
  "key" VARCHAR NOT NULL, -- eg. "BENEFIT_CALCULATOR", "BUDGET_PLANNER",...
  "category" TEXT NOT NULL, -- eg. "MENTAL_HEALTH", "DEBT_ADVICE", "BIDGET",...
  "label" VARCHAR NOT NULL,
  "value" VARCHAR NOT NULL, -- url or phone number
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  CONSTRAINT organisation_id_key_pkey PRIMARY KEY("organisation_id", "key")
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "organisations_resources"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
