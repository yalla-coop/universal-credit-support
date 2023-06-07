import { query } from '../../../database';

const createMedia = async (
  {
    fileName,
    fileType,
    size,
    key,
    bucket,
    bucketRegion,
    fileCategory,
    createdBy,
  },
  client,
) => {
  const values = [
    fileName,
    fileType,
    size,
    key,
    bucket,
    bucketRegion,
    fileCategory,
    createdBy,
  ];

  const sql = `
    INSERT INTO media(
      file_name,
      file_type,
      size,
      key,
      bucket,
      bucket_region,
      file_category,
      created_by
    )
      VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8
      ) RETURNING id
  `;
  const res = await query(sql, values, client);

  return res.rows[0];
};

export { createMedia };
