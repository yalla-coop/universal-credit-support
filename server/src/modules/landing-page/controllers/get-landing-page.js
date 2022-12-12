import * as landingPage from '../use-cases';

const getLandingPage = async (req, res, next) => {
  try {
    const { lng } = req.query;
    const landingPageContent = await landingPage.getLandingPage({ lng });

    res.json(landingPageContent);
  } catch (error) {
    next(error);
  }
};

export default getLandingPage;
