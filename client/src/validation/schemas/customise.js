import { fields, createSchema, validate as _validate } from '..';

const { requiredText, hslColor, optionalCheckbox } = fields;

const schema = createSchema({
  logoFile: requiredText,
  primaryBgMain: hslColor,
  secondaryBgMain: hslColor,
  tertiaryBgMain: hslColor,
  quartenaryBgMain: hslColor,
  quinaryBgMain: hslColor,
  primaryTextMain: hslColor,
  secondaryTextMain: hslColor,
  tertiaryTextMain: hslColor,
  quartenaryTextMain: hslColor,
  quinaryTextMain: hslColor,
  useBlockColors: optionalCheckbox,
});

const validate = (data) => {
  return _validate(schema, data);
};

export default validate;
