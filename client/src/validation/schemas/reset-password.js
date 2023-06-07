import { fields, createSchema, validate as _validate } from '..';

const { password } = fields;

const volunteer = createSchema({
  password,
});

const validate = (data) => _validate(volunteer, data);

export default validate;
