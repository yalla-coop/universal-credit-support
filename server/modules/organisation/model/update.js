import { query } from '../../../database';

const updateOrganisation = async (
  {
    id,
    uniqueSlug,
    contactLinks,
    benefitCalculatorLink,
    benefitCalculatorLabel,
    colors,
    logoId,
  },
  client,
) => {
  const sql = `
    UPDATE organisations AS o
      SET
        unique_slug = COALESCE($2, o.unique_slug),
        contact_links = COALESCE($3, o.contact_links),
        benefit_calculator_link = COALESCE($4, o.benefit_calculator_link),
        benefit_calculator_label = COALESCE($5, o.benefit_calculator_label),
        colors = COALESCE($6, o.colors),
        logo_id = COALESCE($7, o.logo_id)
    FROM organisations AS old_org
    WHERE o.id = old_org.id AND o.id = $1
    RETURNING old_org.*
  `;
  const values = [
    id,
    uniqueSlug,
    contactLinks,
    benefitCalculatorLink,
    benefitCalculatorLabel,
    colors,
    logoId,
  ];

  const res = await query(sql, values, client);
  return res.rows[0];
};

export { updateOrganisation };
