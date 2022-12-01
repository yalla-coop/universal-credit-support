import axios from 'axios';
import handleError from './format-error';

const TRANSLATION_BASE = 'translations';

const getCommon = async ({ options, lng }) => {
  try {
    const { data } = await axios.get(`${TRANSLATION_BASE}/common`, {
      params: { lng },
    });

    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export { getCommon };
