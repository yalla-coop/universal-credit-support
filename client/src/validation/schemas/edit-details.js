import { fields, createSchema, validate as _validate } from '..';

const {
  name,
  organisationName,
  email,
  urlSlug,
  contactLinks,
  requiredText,
  urlRequired,
} = fields;

const schema = createSchema({
  name,
  organisationName,
  email,
  uniqueSlug: urlSlug,
  benefitCalculatorLink: urlRequired,
  benefitCalculatorLabel: requiredText,
  contactLinks,
});

const validate = (data) => _validate(schema, data);

export default validate;
