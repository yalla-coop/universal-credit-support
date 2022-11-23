import { query } from '../../../database';

const updateOrganisation = async (
  { id, organisationName, typeOfOrganisation, uniqueSlug, colors, logoId },
  client,
) => {
  const sql = `
    UPDATE organisations AS o
      SET
        organisation_name = COALESCE($2, o.organisation_name),
        type_of_organisation = COALESCE($6, o.type_of_organisation),
        unique_slug = COALESCE($3, o.unique_slug),
        colors = COALESCE($4, o.colors),
        logo_id = COALESCE($5, o.logo_id)
    FROM organisations AS old_org
    WHERE o.id = old_org.id AND o.id = $1
    RETURNING old_org.*
  `;
  const values = [id, organisationName, uniqueSlug, colors, logoId, typeOfOrganisation];

  const res = await query(sql, values, client);
  return res.rows[0];
};

const updateOrganisationResources = async ({ organisationId, resources }) => {
  const sql = `
    INSERT INTO organisations_resources (organisation_id, key, category, label, value)
    SELECT * FROM UNNEST($1::INTEGER[], $2::VARCHAR[], $3::VARCHAR[], $4::VARCHAR[], $5::VARCHAR[])
    ON CONFLICT (organisation_id, key) DO UPDATE SET
      category = EXCLUDED.category,
      label = EXCLUDED.label,
      value = EXCLUDED.value
    RETURNING *
    ;
  `;
  const values = [
    resources.map(() => organisationId),
    resources.map((r) => r.key),
    resources.map((r) => r.category),
    resources.map((r) => r.label),
    resources.map((r) => r.value),
  ];
  const res = await query(sql, values);
  return res.rows;
};

export { updateOrganisation, updateOrganisationResources };
