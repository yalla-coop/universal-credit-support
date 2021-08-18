DROP TABLE IF EXISTS "images" CASCADE;

CREATE TABLE "images" (
  "id" SERIAL PRIMARY KEY,
  "key" TEXT NOT NULL UNIQUE, --S3 unique key
  "file_name" VARCHAR,
  "bucket" VARCHAR(50) NOT NULL,
  "bucket_region" VARCHAR(15) NOT NULL,

  "created_by" INTEGER,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "images"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();