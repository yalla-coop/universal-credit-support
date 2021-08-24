import * as landingPage from '../use-cases';

const getLandingPage = async (req, res, next) => {
  try {
    const landingPageContent = await landingPage.getLandingPage({});

    res.json(landingPageContent);
  } catch (error) {
    next(error);
  }
};

export default getLandingPage;
