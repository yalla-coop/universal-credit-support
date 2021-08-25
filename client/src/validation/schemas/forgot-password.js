import { fields, createSchema, validate as _validate } from '..';

const { email } = fields;

const volunteer = createSchema({
  email,
});

const validate = (data) => _validate(volunteer, data);

export default validate;
