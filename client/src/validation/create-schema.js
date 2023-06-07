import { object } from 'yup';

/**
 * create yup schema
 * @param {*} fields schema fields object
 */
const createSchema = (fields) => {
  const schema = object().shape(fields);
  return schema;
};

export default createSchema;
