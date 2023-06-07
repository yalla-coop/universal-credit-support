import * as LandingPage from '../model';

const updateLandingPage = async ({
  headline,
  subtitle,
  instructions,
  userId,
}) => {
  return LandingPage.updateLandingPageContent({
    headline,
    subtitle,
    instructions,
    userId,
  });
};

export default updateLandingPage;
