import { query } from '../../../database';

const updateUserRole = async ({ role, id }) => {
  const sql = `
    UPDATE users
    SET
      role = $1
    WHERE id = $2
    RETURNING *
  `;
  const values = [role, id];

  const res = await query(sql, values);
  return res.rows[0];
};

export { updateUserRole };
