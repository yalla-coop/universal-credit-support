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

const findOrganisation = async (id) => {
  const sql = `
    SELECT
      id,
      organisation_name,
      unique_slug,
      user_id
    FROM organisations
    WHERE id = $1
  `;
  const values = [id];

  const res = await query(sql, values);
  return res.rows[0];
};

export { findOrganisation, findOrganisationExistsByUserId };
