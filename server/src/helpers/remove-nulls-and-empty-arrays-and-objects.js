const removeNullsAndEmptyArraysAndObjects = (json) => {
  if (
    typeof json === 'string' ||
    typeof json === 'number' ||
    typeof json === 'boolean'
  ) {
    return json;
  }
  if (Array.isArray(json)) {
    return json
      .map(removeNullsAndEmptyArraysAndObjects)
      .filter((item) => item !== null);
  }

  Object.keys(json).forEach((key) => {
    if (json[key] && typeof json[key] === 'object') {
      removeNullsAndEmptyArraysAndObjects(json[key]);
    } else if (json[key] === null || json[key] === '') {
      // eslint-disable-next-line no-param-reassign
      delete json[key];
    }
  });

  return json;
};

export default removeNullsAndEmptyArraysAndObjects;
