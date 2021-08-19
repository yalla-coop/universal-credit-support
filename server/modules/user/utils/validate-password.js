import {
  fields,
  createSchema,
  validate as _validate,
} from '../../../services/validation';

const { password } = fields;

const passwordSchema = createSchema({
  password,
});

const validate = (data) => _validate(passwordSchema, data);
export default validate;
