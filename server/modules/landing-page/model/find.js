import { query } from '../../../database';

const getLandingPageContent = async () => {
  const sql = `
    SELECT
      lpc.headline,
      lpc.subtitle,
      lpc.instructions
    FROM landing_page_content AS lpc
    WHERE lpc.id = 1 -- TODO: change when each organisation can has its own landing page
  `;

  const res = await query(sql);
  return res.rows[0];
};

export { getLandingPageContent };
