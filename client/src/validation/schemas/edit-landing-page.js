import { fields, createSchema, validate as _validate } from '..';

const { textMax300Required } = fields;

const schema = createSchema({
  headline: textMax300Required,
  subtitle: textMax300Required,
  instructions: textMax300Required,
});

const validate = (data) => _validate(schema, data);

export default validate;
