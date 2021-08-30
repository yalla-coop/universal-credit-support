import { query } from '../../../database';

const findOrganisation = async (id) => {
  const sql = `
    SELECT
    o.id,
    o.organisation_name,
    o.unique_slug,
    o.colors,
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

const findOrganisationWithUser = async (id) => {
  const sql = `
    SELECT
    o.id,
    o.organisation_name,
    o.unique_slug,
    o.contact_links,
    o.benefit_calculator_link,
    o.benefit_calculator_label,
    u.first_name,
    u.last_name,
    u.email
    FROM organisations AS o
    INNER JOIN users AS u ON(u.organisation_id = o.id)
    WHERE o.id = $1
    `;
  const values = [id];

  const res = await query(sql, values);
  return res.rows[0];
};

const findHelpDetails = async (uniqueSlug) => {
  const sql = `
    SELECT
      id,
      contact_links
    FROM organisations
    WHERE unique_slug = $1
  `;
  const values = [uniqueSlug];

  const res = await query(sql, values);
  return res.rows[0];
};

const findBenefitCalculator = async (uniqueSlug) => {
  const sql = `
    SELECT
      id,
      benefit_calculator_link,
      benefit_calculator_label
    FROM organisations
    WHERE unique_slug = $1
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

export {
  findOrganisation,
  findHelpDetails,
  findBenefitCalculator,
  findOrganisationBySlug,
  findOrganisationWithUser,
};
