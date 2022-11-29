const convertYupErrorsToNestedObjectRecursive = (objErrors) => {
  // objErrors in shape of { topics[0].resources[0].label: ['error1', 'error2'] }
  Object.entries(objErrors).forEach(([key, value]) => {
    const [parent, ...children] = key.split('.');
    objErrors[parent] = objErrors[parent] || {};
    if (children.length) {
      objErrors[parent][children.join('.')] = value[0];
      delete objErrors[key];
    }
  });
  return objErrors;
};

const makeYupErrorsIntoObject = (errors) => {
  const errorsObject = {};
  errors.inner.forEach((error) => {
    if (errorsObject[error.path]) {
      errorsObject[error.path].push(error.message);
    } else {
      errorsObject[error.path] = [error.message];
    }
  });

  return convertYupErrorsToNestedObjectRecursive(errorsObject);
};

const validate = (schema, data, { abortEarly = false, ...options } = {}) => {
  try {
    const validData = schema.validateSync(data, {
      abortEarly,
      ...options,
    });
    return { data: validData };
  } catch (error) {
    error.inner = makeYupErrorsIntoObject(error);
    throw error;
  }
};

export default validate;
