BEGIN;

ALTER TABLE organisations ALTER COLUMN type_of_organisation SET NOT NULL;
ALTER TABLE organisations ALTER COLUMN unique_slug SET NOT NULL;
ALTER TABLE organisations DROP CONSTRAINT not_null;

COMMIT;