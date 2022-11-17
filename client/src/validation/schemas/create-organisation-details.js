import { fields, createSchema, validate as _validate } from '..';

const { requiredText, hexColorOptional } = fields;

const schema = createSchema({});
const secondStep = createSchema({
  mainColor: hexColorOptional,
  secondaryColor: hexColorOptional,
  neutralColor: hexColorOptional,
  logoFile: requiredText,
});

const validate = (data) => {
  if (data.secondStep) {
    return _validate(secondStep, data);
  }
  return _validate(schema, data);
};

export default validate;
