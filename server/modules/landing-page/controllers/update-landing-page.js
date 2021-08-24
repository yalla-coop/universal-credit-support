import * as landingPage from '../use-cases';

const updateLandingPage = async (req, res, next) => {
  const { headline, subtitle, instructions } = req.body;
  try {
    const landingPageContent = await landingPage.updateLandingPage({
      headline,
      subtitle,
      instructions,
    });

    res.json(landingPageContent);
  } catch (error) {
    next(error);
  }
};

export default updateLandingPage;
