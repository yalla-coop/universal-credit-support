import { query } from '../connect';

const createLandingPage = async ({
  landingPageId,
  languageCode,
  headline,
  subtitle,
  instructions,
}) => {
  const sql = `INSERT INTO landing_page_content_i18n (
    landing_page_content_id, language_code, headline, subtitle, instructions
  ) VALUES (
    $1,
    $2,
    $3,
    $4,
    $5
  ) RETURNING *`;
  const res = await query(sql, [
    landingPageId,
    languageCode,
    headline,
    subtitle,
    instructions,
  ]);
  return res.rows[0];
};

const addLandingPageContent = async () => {
  const landingPageData = {
    landingPageId: 1,
    languageCode: 'ar',
    headline: `AR-Are you trying to work out how you actually claim for Universal Credit and feeling a bit lost?
    `,
    subtitle: `AR-Don’t worry, we’ve got you! Click on each step below to work your way through the process.
    `,
    instructions: `AR-Everything will be saved as you go so you can leave this tool and come back anytime.
    Always remember you can contact us whenever just by clicking that useful ‘Help Me!’ button. 
    `,
  };
  const landingPage = await createLandingPage(landingPageData);

  return {
    landingPage,
  };
};

export default addLandingPageContent;
