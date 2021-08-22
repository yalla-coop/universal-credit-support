const isArray = (a) => {
  return Array.isArray(a);
};

const isObject = (o) => {
  return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

const possibleCsvInject = RegExp(/^(=|"=|\+|"\+|-|"-|@|"@)/);

const sanitizeCSVInjection = (params) => {
  if (isObject(params)) {
    const n = {};

    Object.entries(params).forEach(([key, _value]) => {
      if (isArray(_value) || isObject(_value)) {
        sanitizeCSVInjection(_value);
      }

      let value = _value;
      if (possibleCsvInject.test(_value)) {
        value = `\t${_value}`;
      }
      n[key] = value;
    });

    return n;
  }

  if (isArray(params)) {
    return params.map((value) => {
      return sanitizeCSVInjection(value);
    });
  }

  if (typeof params === 'string') {
    let value = params;
    if (possibleCsvInject.test(params)) {
      value = `\t${params}`;
    }
    return value;
  }

  return params;
};

export default sanitizeCSVInjection;
