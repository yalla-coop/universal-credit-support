import { query } from '../../../database';
import { organisationStatuses } from '../../../constants';

const updateOrganisation = async (
  {
    id,
    organisationName,
    uniqueSlug,
    colors,
    logoId,
    typeOfOrganisation,
    status,
  },
  client,
) => {
  const sql = `
    UPDATE organisations AS o
      SET
        organisation_name = COALESCE($2, o.organisation_name),
        unique_slug = COALESCE($3, o.unique_slug),
        colors = COALESCE($4, o.colors),
        logo_id = COALESCE($5, o.logo_id),
        type_of_organisation = COALESCE($6, o.type_of_organisation),
        status = COALESCE($7, o.status)
    FROM organisations AS old_org
    WHERE o.id = old_org.id AND o.id = $1
    RETURNING old_org.*
  `;
  const values = [
    id,
    organisationName,
    uniqueSlug,
    colors,
    logoId,
    typeOfOrganisation,
    status,
  ];

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

const updateOrganisationToDeleted = async (id, client) => {
  const values = [id, organisationStatuses.DELETED];

  const sql = `
    UPDATE organisations
    SET
      organisation_name = NULL,
      type_of_organisation = NULL,
      unique_slug = NULL,
      still_need_help_phone_number = NULL,
      still_need_help_label = NULL,
      logo_id = NULL,
      status = $2
    WHERE
      id = $1;
  `;

  const res = await query(sql, values, client);
  return res.rows[0];
};

const updateOrganisationStatus = async ({ id, status }) => {
  const sql = `
    UPDATE organisations
      SET
        status = $2
    WHERE id = $1
    RETURNING *
  `;
  const values = [id, status];

  const res = await query(sql, values);
  return res.rows[0];
};

export {
  updateOrganisation,
  updateOrganisationResources,
  updateOrganisationToDeleted,
  updateOrganisationStatus,
};
