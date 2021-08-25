import * as steps from '../use-cases';

const getSteps = async (req, res, next) => {
  console.log('reached');
  try {
    const landingPageContent = await steps.getSteps({});

    res.json(landingPageContent);
  } catch (error) {
    next(error);
  }
};

export default getSteps;
