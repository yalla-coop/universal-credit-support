// import { query } from '../../../database';

// const findMediaById = async (id, client) => {
//   const values = [id];
//   const sql = `
//   SELECT
//     id,
//     file_name,
//     key,
//     bucket,
//     bucket_region,
//     size,
//     path,
//     file_type,
//     created_by,
//     created_at,
//     updated_at
//   FROM media
//     WHERE id = $1
//   `;

//   const res = await query(sql, values, client);
//   return res.rows[0];
// };

// export { findMediaById };
