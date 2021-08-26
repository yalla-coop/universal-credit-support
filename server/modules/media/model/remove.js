import { query } from '../../../database';

const deleteMediaById = async (id, client) => {
  const sql = `
    DELETE FROM media
    WHERE id = $1
    RETURNING *
  `;

  const res = await query(sql, [id], client);
  return res.rows[0];
};

export { deleteMediaById };
