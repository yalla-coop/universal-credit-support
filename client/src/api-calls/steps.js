import axios from 'axios';
import handleError from './format-error';

const STEPS_BASE = '/steps';

const editStep = async ({ id, form, options } = {}) => {
  try {
    const { data } = await axios.patch(`${STEPS_BASE}/${id}`, form);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};
const getStepById = async (id, { options } = {}) => {
  try {
    const { data } = await axios.get(`${STEPS_BASE}/${id}`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getStepsContent = async ({ options, lng }) => {
  try {
    const { data } = await axios.get(`${STEPS_BASE}`, { params: { lng } });
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

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

export { getStepsContent, editStep, getStepById, updateSteps };
