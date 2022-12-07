import { fields, createSchema, validate as _validate } from '..';

const { requiredText, customColor, customColorOptional } = fields;

const schema = createSchema({
  logoFile: requiredText,
  mainHeaderBgColor: customColorOptional,
  section1BgColor: customColor,
  section2BgColor: customColor,
  section3BgColor: customColor,
  section4BgColor: customColor,
  section5BgColor: customColor,
  section1TextColor: customColor,
  section2TextColor: customColor,
  section3TextColor: customColor,
  section4TextColor: customColor,
  section5TextColor: customColor,
});

const validate = (data) => {
  return _validate(schema, data);
};

export default validate;
