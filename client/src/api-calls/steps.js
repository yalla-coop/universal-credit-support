import axios from 'axios';
import handleError from './format-error';

const STEP_BASE = '/step';

const EditStep = async (form, { options } = {}) => {
  try {
    const { data } = await axios.post(`${STEP_BASE}/edit`, form);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export { EditStep };
