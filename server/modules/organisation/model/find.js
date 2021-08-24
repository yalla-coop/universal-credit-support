import { query } from '../../../database';

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

const findHelpDetails = async (orgLink) => {
  const sql = `
    SELECT
      id,
      contact_links
    FROM organisations
    WHERE unique_slug = $1
  `;
  const values = [orgLink];

  const res = await query(sql, values);
  return res.rows[0];
};

export { findOrganisation, findHelpDetails };
