import { query } from '../../../database';

const findOrganisation = async (id) => {
  const sql = `
    SELECT
    o.id,
    o.organisation_name,
    o.unique_slug,
    o.colors,
    o.type_of_organisation,
    o.contact_links,
    o.benefit_calculator_link,
    o.benefit_calculator_label,
    o.logo_id,
    o.colors,
    o.status,
    m.bucket,
    m.key,
    m.file_name
    FROM organisations AS o
    LEFT JOIN media AS m ON (m.id = o.logo_id)
    WHERE o.id = $1
    `;
  const values = [id];

  const res = await query(sql, values);
  return res.rows[0];
};

const findOrganisationForPublicBySlug = async (uniqueSlug) => {
  const sql = `
    SELECT
      o.id,
      o.contact_links,
      o.benefit_calculator_link,
      o.benefit_calculator_label,
      o.organisation_name,
      o.unique_slug,
      o.colors,
      o.status,
      m.bucket,
      m.key,
      m.file_name
    FROM organisations AS o
    LEFT JOIN media AS m ON (m.id = o.logo_id)
    WHERE LOWER(o.unique_slug) = $1
  `;
  const values = [uniqueSlug];

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

const findOrganisationsByStatus = async (status, client) => {
  const sql = `
      SELECT
      id,
      organisation_name,
      type_of_organisation,
      unique_slug,
      logo_id,
      colors,
      status,
      num_of_claims_process_started,
      num_of_claims_process_completed,
      num_of_visitors
      FROM organisations
      WHERE status = $1
    `;
  const values = [status];

  const res = await query(sql, values, client);
  return res.rows;
};

export {
  findOrganisation,
  findOrganisationBySlug,
  findOrganisationForPublicBySlug,
  findOrganisationsByStatus,
};
