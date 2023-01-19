import * as landingPage from '../use-cases';

const getLandingPage = async (req, res, next) => {
  try {
    const { lng, forPublic } = req.query;
    const _forPublic = forPublic === 'true' ? true : false
    const landingPageContent = await landingPage.getLandingPage({
      lng,
      forPublic : _forPublic,
    });

    res.json(landingPageContent);
  } catch (error) {
    next(error);
  }
};

export default getLandingPage;
