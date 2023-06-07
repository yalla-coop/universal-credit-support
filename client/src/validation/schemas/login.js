import { fields, createSchema, validate as _validate } from '..';

const { email, loginPassword } = fields;

const volunteer = createSchema({
  email,
  password: loginPassword,
});

const validate = (data) => _validate(volunteer, data);

export default validate;
