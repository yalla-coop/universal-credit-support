import { fields, createSchema, validate as _validate } from '..';

const { loginPassword } = fields;

const volunteer = createSchema({
  password: loginPassword,
});

const validate = (data) => _validate(volunteer, data);

export default validate;
