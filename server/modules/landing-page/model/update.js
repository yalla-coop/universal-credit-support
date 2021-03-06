import { query } from '../../../database';

const updateLandingPageContent = async ({
  headline,
  subtitle,
  instructions,
  userId,
}) => {
  const sql = `
    UPDATE landing_page_content
      SET
        headline = $1,
        subtitle = $2,
        instructions = $3,
        updated_by = $4
    WHERE id = 1 -- TODO: change when each organisation can has its own landing page
  `;
  const values = [headline, subtitle, instructions, userId];
  const res = await query(sql, values);
  return res.rows[0];
};

export { updateLandingPageContent };
