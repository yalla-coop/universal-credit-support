import * as LandingPage from '../model';

const updateLandingPage = async ({ headline, subtitle, instructions }) => {
  return LandingPage.updateLandingPageContent({
    headline,
    subtitle,
    instructions,
  });
};

export default updateLandingPage;
