DROP TABLE IF EXISTS "media" CASCADE;

CREATE TABLE "media" (
  "id" SERIAL PRIMARY KEY,
  "key" TEXT NOT NULL UNIQUE, --S3 unique key
  "file_name" VARCHAR,
  "bucket" VARCHAR(50) NOT NULL,
  "bucket_region" VARCHAR(15) NOT NULL,
  "file_type" VARCHAR(100),
  "size" INTEGER,
  "file_category" media_file_categories NOT NULL,

  "created_by" INTEGER,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "media"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();