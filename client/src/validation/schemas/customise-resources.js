import { fields, createSchema, validate as _validate } from '..';

const { contactLinks, requiredText, urlRequired } = fields;

const schema = createSchema({
  benefitCalculatorLink: urlRequired,
  benefitCalculatorLabel: requiredText,
  contactLinks,
});

const validate = (data) => _validate(schema, data);

export default validate;
