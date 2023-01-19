// import { query } from '../../../database';

// const updateMediaById = async (
//   { id, fileName, fileType, size, key, bucket, bucketRegion, createdBy },
//   client,
// ) => {
//   const values = [
//     id,
//     fileName,
//     fileType,
//     size,
//     key,
//     bucket,
//     bucketRegion,
//     createdBy,
//   ];
//   const sql = `
//     UPDATE media AS m
//     SET
//       file_name = COALESCE($2, m.file_name),
//       file_type = COALESCE($3, m.file_type),
//       size = COALESCE($4, m.size),
//       key = COALESCE($5, m.key),
//       bucket = COALESCE($6, m.bucket),
//       bucket_region = COALESCE($7, m.bucket_region),
//       created_by = COALESCE($8, m.created_by)
//     WHERE m.id = $1
//     RETURNING *
//   `;
//   const res = await query(sql, values, client);

//   return res.rows[0];
// };

// export { updateMediaById };
