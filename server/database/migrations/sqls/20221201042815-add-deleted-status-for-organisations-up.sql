BEGIN;

ALTER TYPE organisation_statuses ADD VALUE IF NOT EXISTS 'DELETED'; 

ALTER TABLE organisations ALTER COLUMN type_of_organisation DROP NOT NULL;
ALTER TABLE organisations ALTER COLUMN unique_slug DROP NOT NULL;

ALTER TABLE organisations ADD CONSTRAINT not_null CHECK (
    CASE
      WHEN status != 'DELETED'  THEN (
          unique_slug IS NOT NULL AND
          type_of_organisation IS NOT NULL
        )
      ELSE true
    END
  );

COMMIT;