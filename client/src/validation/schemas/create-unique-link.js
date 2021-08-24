import { fields, createSchema, validate as _validate } from '..';

const { urlSlug } = fields;

const volunteer = createSchema({
  uniqueSlug: urlSlug,
});

const validate = (data) => _validate(volunteer, data);

export default validate;
