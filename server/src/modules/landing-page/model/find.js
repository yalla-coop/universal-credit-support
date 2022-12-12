import { query } from '../../../database';

const getLandingPageContent = async (lng) => {
  const sql = `
    SELECT
      lpc.id,
      COALESCE(lpc_i18n.headline, lpc.headline) AS headline,
      COALESCE(lpc_i18n.subtitle, lpc.subtitle) AS subtitle,
      COALESCE(lpc_i18n.instructions, lpc.instructions) AS instructions,
      lpc_i18n.language_code
    FROM landing_page_content AS lpc
    LEFT JOIN landing_page_content_i18n AS lpc_i18n
      ON lpc.id = lpc_i18n.landing_page_content_id
      AND lpc_i18n.language_code = $1
    WHERE lpc.id = 1 -- TODO: change when each organisation can has its own landing page
  `;

  const res = await query(sql, [lng]);
  return res.rows[0];
};

export { getLandingPageContent };
