import * as Steps from '../model';

const getStep = async ({ id }) => {
  const step = await Steps.getStepById(id);

  return step;
};

export default getStep;
