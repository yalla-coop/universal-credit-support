import axios from 'axios';
import handleError from './format-error';

const ORGS_BASE = '/organisations';

const getOrganisation = async ({ id, options }) => {
  try {
    const { data } = await axios.get(`${ORGS_BASE}/${id}`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};
const updateOrganisation = async ({ id, body, options }) => {
  try {
    const { data } = await axios.patch(`${ORGS_BASE}/${id}`, body);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export { updateOrganisation, getOrganisation };
