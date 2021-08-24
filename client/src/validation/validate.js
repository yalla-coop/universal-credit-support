/**
 * change error plain object to nested object
 * @param {*} error error object
 */
const handleValidationError = (error) => {
  const newErrors = {};
  if (error.inner)
    error.inner.forEach(({ path, message: errorMessage }) => {
      if (path && path.includes('.')) {
        const segments = path.split('.');
        const [parent, childrenPath] = segments;
        newErrors[path] = newErrors[path] || {};

        newErrors[parent] = {
          ...newErrors[parent],
          [childrenPath]: errorMessage,
        };
      } else {
        newErrors[path] = errorMessage;
      }
    });

  // eslint-disable-next-line no-param-reassign
  error.inner = newErrors;
  return error;
};

const validate = (schema, data, { abortEarly = false, ...options } = {}) => {
  try {
    const validData = schema.validateSync(data, {
      abortEarly,
      ...options,
    });
    return { data: validData };
  } catch (error) {
    const errorData = handleValidationError(error);
    throw errorData;
  }
};

export default validate;
