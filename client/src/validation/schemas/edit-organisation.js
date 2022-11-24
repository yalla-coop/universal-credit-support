import { fields, createSchema, validate as _validate } from '..';

const { firstName, lastName, organisationName, email, urlSlug, requiredText } =
  fields;

const schema = createSchema({
  firstName,
  lastName,
  organisationName,
  email,
  uniqueSlug: urlSlug,
  backupEmail: email,
  typeOfOrganisation: requiredText,
});

const validate = (data) => _validate(schema, data);

export default validate;
