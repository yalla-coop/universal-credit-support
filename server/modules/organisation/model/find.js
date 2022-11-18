import { query } from '../../../database';

const findOrganisation = async (id) => {
  const sql = `
    SELECT
    o.id,
    o.organisation_name,
    o.unique_slug,
    o.colors,
    o.type_of_organisation,
    o.logo_id,
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

const findOrganisationForPublicBySlug = async (uniqueSlug) => {
  const sql = `
    SELECT
      o.id,
      o.organisation_name,
      o.unique_slug,
      o.colors,
      m.bucket,
      m.key,
      m.file_name,
      (
        SELECT
        ARRAY_AGG(
          json_build_object(
            'id', orr.id,
            'key', orr.key,
            'category', orr.category,
            'label', orr.label,
            'value', orr.value
      ) ORDER BY orr.id ASC)
        FROM organisations_resources AS orr
        WHERE orr.organisation_id = o.id
      ) AS resources
    FROM organisations AS o
    LEFT JOIN media AS m ON (m.id = o.logo_id)
    WHERE o.unique_slug = $1
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
  findOrganisationBySlug,
  findOrganisationForPublicBySlug,
};
