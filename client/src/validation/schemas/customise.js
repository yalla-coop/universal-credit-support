import { fields, createSchema, validate as _validate } from '..';

const { requiredText, hexColor } = fields;

const schema = createSchema({
  mainColor: hexColor,
  secondaryColor: hexColor,
  neutralColor: hexColor,
  logoFile: requiredText,
});

const validate = (data) => {
  return _validate(schema, data);
};

export default validate;
