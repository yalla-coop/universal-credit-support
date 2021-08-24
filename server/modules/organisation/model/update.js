import { query } from '../../../database';

const updateOrganisation = async ({
  id,
  uniqueSlug,
  contactLinks,
  benefitCalculatorLink,
  benefitCalculatorLabel,
  colors,
}) => {
  const sql = `
    UPDATE organisations AS o
      SET
        unique_slug = COALESCE($2, o.unique_slug),
        contact_links = COALESCE($3, o.contact_links),
        benefit_calculator_link = COALESCE($4, o.benefit_calculator_link),
        benefit_calculator_label = COALESCE($5, o.benefit_calculator_label),
        colors = COALESCE($6, o.colors)
    WHERE id = $1
  `;
  const values = [
    id,
    uniqueSlug,
    contactLinks,
    benefitCalculatorLink,
    benefitCalculatorLabel,
    colors,
  ];

  const res = await query(sql, values);
  return res.rows[0];
};

export { updateOrganisation };
