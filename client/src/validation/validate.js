/**
 * change error plain object to nested object
 * @param {*} error error object
 */

const objFormat = (obj) => {
  const keys = Object.keys(obj);
  let newKeys = {};
  let regex = /(\[\d+\])/;
  keys.forEach((key) => {
    let matchedKey = key.match(regex);
    if (matchedKey !== null) {
      if (!key.includes('.')) {
        let number = matchedKey[0].match(/(\d+)/)[0];
        let newKey = key.split('[')[0];
        newKeys[newKey] = { ...newKeys[newKey], [number]: obj[key] };
      }
    } else if (!key.includes('.')) {
      newKeys[key] = obj[key];
    }
  });
  return newKeys;
};

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
  error.inner = objFormat(newErrors);
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
