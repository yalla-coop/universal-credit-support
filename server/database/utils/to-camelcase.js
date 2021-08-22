// https://matthiashager.com/converting-snake-case-to-camel-case-object-keys-with-javascript

const isDate = (a) => {
  return a instanceof Date;
};

const isArray = (a) => {
  return Array.isArray(a);
};

const isObject = (o) => {
  return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

const toCamel = (s) => {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

const keysToCamel = (o) => {
  if (isObject(o) && !isDate(o)) {
    const n = {};

    Object.keys(o).forEach((k) => {
      n[toCamel(k)] = keysToCamel(o[k]);
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
