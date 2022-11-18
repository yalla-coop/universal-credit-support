import { fields, createSchema, validate as _validate } from '..';

const { firstName, lastName, organisationName, email, urlSlug } = fields;

const schema = createSchema({
  firstName,
  lastName,
  organisationName,
  email,
  uniqueSlug: urlSlug,
});

const validate = (data) => _validate(schema, data);

export default validate;
