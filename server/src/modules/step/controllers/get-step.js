import * as steps from '../use-cases';

const getStep = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { lng = 'en', forPublic } = req.query;
    const step = await steps.getStep({
      id,
      lng,
      forPublic: forPublic === 'true',
    });

    res.json(step);
  } catch (error) {
    next(error);
  }
};

export default getStep;
