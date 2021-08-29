import { fields, createSchema, validate as _validate } from '..';

const {
  firstName,
  lastName,
  organisationName,
  email,
  urlSlug,
  contactLinks,
  requiredText,
  urlRequired,
} = fields;

const schema = createSchema({
  firstName,
  lastName,
  organisationName,
  email,
  uniqueSlug: urlSlug,
  benefitCalculatorLink: urlRequired,
  benefitCalculatorLabel: requiredText,
  contactLinks,
});

const validate = (data) => _validate(schema, data);

export default validate;
