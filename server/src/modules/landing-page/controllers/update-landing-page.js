import * as landingPage from '../use-cases';

const updateLandingPage = async (req, res, next) => {
  const { headline, subtitle, instructions } = req.body;
  const { id: userId } = req.user;
  try {
    const landingPageContent = await landingPage.updateLandingPage({
      headline,
      subtitle,
      instructions,
      userId,
    });

    res.json(landingPageContent);
  } catch (error) {
    next(error);
  }
};

export default updateLandingPage;
