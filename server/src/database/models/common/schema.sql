DROP TABLE IF EXISTS "common" CASCADE;

CREATE TABLE "common" (
  "id" SERIAL PRIMARY KEY,
  "content" JSONB,
    -- {
    --    buttons: {
    --      readMore: 'Read more',
    --      seeAdvice: 'See advice',
    --      stuckTalkToSomeOne: 'Stuck? Talk to someone',
    --    },
    --    heading: {
    --      costOfLivingHelper: 'Cost of Living Helper',
    --      payingForHousing: 'Cost of Living Helper',
    --      payingForMyBills: 'Cost of Living Helper',
    --      payingForEssentials: 'Cost of Living Helper',
    --      dealingWithDebts: 'Cost of Living Helper',
    --      maximiseIncome: 'Cost of Living Helper',
    --    }
    -- ...
    -- }

  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "common"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
