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

const findOrganisationBySlug = async (slug, client) => {
  const sql = `
      SELECT
        id
      FROM organisations
      WHERE unique_slug = $1
  
    `;
  const values = [slug];

  const res = await query(sql, values, client);
  return res.rows[0];
};
export { findOrganisation, findOrganisationBySlug };
