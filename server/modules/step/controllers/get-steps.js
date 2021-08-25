import * as steps from '../use-cases';

const getSteps = async (req, res, next) => {
  try {
    const landingPageContent = await steps.getSteps({});

    res.json(landingPageContent);
  } catch (error) {
    next(error);
  }
};

export default getSteps;
