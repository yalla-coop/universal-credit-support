import { query } from '../../../database';

const findOrganisationExistsByUserId = async (userId) => {
  const sql = `
    SELECT
      id
    FROM organisations
    WHERE user_id = $1

  `;
  const values = [userId];

  const res = await query(sql, values);
  return res.rows[0];
};

export { findOrganisationExistsByUserId };
