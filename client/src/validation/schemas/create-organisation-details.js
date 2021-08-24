import { fields, createSchema, validate as _validate } from '..';

const { contactLinks, requiredText, urlRequired, hexColorOptional } = fields;

const schema = createSchema({
  benefitCalculatorLink: urlRequired,
  benefitCalculatorLabel: requiredText,
  contactLinks,
});
const secondStep = createSchema({
  mainColor: hexColorOptional,
  secondaryColor: hexColorOptional,
  neutralColor: hexColorOptional,
});

const validate = (data) => {
  if (data.secondStep) {
    return _validate(secondStep, data);
  }
  return _validate(schema, data);
};

export default validate;
