import axios from 'axios';
import handleError from './format-error';

const STEPS_BASE = '/steps';

const updateSteps = async ({ options, data }) => {
  try {
    // change this when the back its ready!
    // const { data } = await axios.get(`${STEPS_BASE}`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getStepsContent = async ({ options }) => {
  try {
    const { data } = await axios.get(`${STEPS_BASE}`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export { getStepsContent, updateSteps };
