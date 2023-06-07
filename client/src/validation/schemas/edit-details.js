import { fields, createSchema, validate as _validate } from '..';

const {
  firstName,
  lastName,
  organisationName,
  email,
  urlSlug,
  contactLinks,
  optionalText,
  urlOptional,
} = fields;

const schema = createSchema({
  firstName,
  lastName,
  organisationName,
  email,
  uniqueSlug: urlSlug,
  benefitCalculatorLink: urlOptional,
  benefitCalculatorLabel: optionalText,
  contactLinks,
});

const validate = (data) => _validate(schema, data);

export default validate;
