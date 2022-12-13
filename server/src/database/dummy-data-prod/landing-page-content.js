import { query } from '../connect';

const createLandingPage = async ({ headline, subtitle, instructions }) => {
  const sql = `INSERT INTO landing_page_content (
   headline, subtitle, instructions
  ) VALUES (
    $1,
    $2,
    $3
  ) RETURNING *`;
  const res = await query(sql, [headline, subtitle, instructions]);
  return res.rows[0];
};

const addLandingPageContent = async () => {
  const landingPageData = {
    headline: `Are you trying to work out how you actually claim for Universal Credit and feeling a bit lost?
    `,
    subtitle: `Don’t worry, we’ve got you! Click on each step below to work your way through the process.
    `,
    instructions: `Everything will be saved as you go so you can leave this tool and come back anytime.
    Always remember you can contact us whenever just by clicking that useful ‘Help Me!’ button. 
    `,
  };
  const landingPage = await createLandingPage(landingPageData);

  return {
    landingPage,
  };
};

export default addLandingPageContent;
