import { query } from '../../../database';

const updateOrganisation = async (
  {
    id,
    organisationName,
    uniqueSlug,
    contactLinks,
    benefitCalculatorLink,
    benefitCalculatorLabel,
    colors,
    logoId,
    typeOfOrganisation,
  },
  client,
) => {
  const sql = `
    UPDATE organisations AS o
      SET
        organisation_name = COALESCE($2, o.organisation_name),
        unique_slug = COALESCE($3, o.unique_slug),
        contact_links = COALESCE($4, o.contact_links),
        benefit_calculator_link = COALESCE($5, o.benefit_calculator_link),
        benefit_calculator_label = COALESCE($6, o.benefit_calculator_label),
        colors = COALESCE($7, o.colors),
        logo_id = COALESCE($8, o.logo_id),
        type_of_organisation = COALESCE($9, o.type_of_organisation)
    FROM organisations AS old_org
    WHERE o.id = old_org.id AND o.id = $1
    RETURNING old_org.*
  `;
  const values = [
    id,
    organisationName,
    uniqueSlug,
    contactLinks,
    benefitCalculatorLink,
    benefitCalculatorLabel,
    colors,
    logoId,
    typeOfOrganisation,
  ];

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

export { updateOrganisation, updateOrganisationStatus };
