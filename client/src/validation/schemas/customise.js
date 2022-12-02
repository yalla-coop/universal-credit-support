import { fields, createSchema, validate as _validate } from '..';

const { requiredText, hslColor, hslColorOptional } = fields;

const schema = createSchema({
  logoFile: requiredText,
  mainHeaderBgColor: hslColorOptional,
  section1BgColor: hslColor,
  section2BgColor: hslColor,
  section3BgColor: hslColor,
  section4BgColor: hslColor,
  section5BgColor: hslColor,
  section1TextColor: hslColor,
  section2TextColor: hslColor,
  section3TextColor: hslColor,
  section4TextColor: hslColor,
  section5TextColor: hslColor,
});

const validate = (data) => {
  return _validate(schema, data);
};

export default validate;
