import { fields, createSchema, validate as _validate } from '..';

const { requiredText, topics } = fields;

const volunteer = createSchema({
  title: requiredText,
  topics: topics,
});

const validate = (data) => _validate(volunteer, data);

export default validate;
