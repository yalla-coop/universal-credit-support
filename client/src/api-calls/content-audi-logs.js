import axios from 'axios';
import handleError from './format-error';

const CHANGES_BASE = '/content-audit-logs';

const getChanges = async () => {
  try {
    const { data } = await axios.get(`${CHANGES_BASE}`);
    return { data };
  } catch (error) {
    const err = handleError(error);
    return { error: err };
  }
};

export { getChanges };
