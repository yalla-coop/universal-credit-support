import * as steps from '../use-cases';

const getStep = async (req, res, next) => {
  try {
    const { id } = req.params;
    const step = await steps.getStep({ id });

    res.json(step);
  } catch (error) {
    next(error);
  }
};

export default getStep;
