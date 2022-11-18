DROP TABLE IF EXISTS "organisations_resources" CASCADE;

CREATE TABLE "organisations_resources" (
  "id" SERIAL PRIMARY KEY,
  "organisation_id" INTEGER REFERENCES organisations(id),
  "key" TEXT NOT NULL, -- eg. "BENEFIT_CALCULATOR", "BUDGET_PLANNER",...
  "category" TEXT NOT NULL, -- eg. "MENTAL_HEALTH", "DEBT_ADVICE", "BIDGET",...
  "label" VARCHAR NOT NULL,
  "value" VARCHAR NOT NULL, -- url or phone number
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "organisations_resources"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();