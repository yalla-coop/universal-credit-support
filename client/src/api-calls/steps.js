import axios from 'axios';
import handleError from './format-error';

const STEPS_BASE = '/steps';

const getStepsContent = async ({ options }) => {
  console.log('hey', options);
  try {
    const { data } = await axios.get(`${STEPS_BASE}`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export { getStepsContent };
