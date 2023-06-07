import { fields, createSchema, validate as _validate } from '..';

const { requiredText, hslColor } = fields;

const schema = createSchema({
  mainColor: hslColor,
  secondaryColor: hslColor,
  logoFile: requiredText,
});

const validate = (data) => {
  return _validate(schema, data);
};

export default validate;
