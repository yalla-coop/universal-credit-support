const isArray = (a) => {
  return Array.isArray(a);
};

const isObject = (o) => {
  return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

const keysToCamel = (o) => {
  if (isObject(o)) {
    const n = {};

    Object.keys(o).forEach((k) => {
      if (k.includes('.')) {
        const [parent, child] = k.split('.', 2);
        n[parent] = n[parent] || {};
        n[parent][child] = o[k];
      } else {
        n[k] = o[k];
      }
    });

    return n;
  }

  if (isArray(o)) {
    return o.map((i) => {
      return keysToCamel(i);
    });
  }

  return o;
};

export default keysToCamel;
