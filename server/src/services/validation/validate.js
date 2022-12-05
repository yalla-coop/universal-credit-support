import Boom from '@hapi/boom';
import { errorMsgs } from '../error-handler';

const validate = (schema, data, { abortEarly = false, ...options } = {}) => {
  try {
    const validData = schema.validateSync(data, {
      abortEarly,
      ...options,
    });
    return { data: validData };
  } catch (error) {
    throw Boom.badData(errorMsgs.VALIDATION_ERROR);
  }
};

export default validate;
