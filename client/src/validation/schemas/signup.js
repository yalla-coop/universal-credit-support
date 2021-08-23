import { fields, createSchema, validate as _validate } from '..';

const {
  email,
  password,
  firstName,
  lastName,
  agreedOnTerms,
  requiredText,
} = fields;

const adminSignUpSchema = createSchema({
  email,
  backupEmail: email,
  firstName,
  lastName,
  password,
  agreedOnTerms,
  organisationName: requiredText,
  typeOfOrganisation: requiredText,
});

const validate = (data) => {
  return _validate(adminSignUpSchema, data);
};

export default validate;
