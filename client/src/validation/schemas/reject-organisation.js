import { fields, createSchema, validate as _validate } from '..';

const { requiredText } = fields;

const rejectOrganisation = createSchema({
  explanation: requiredText,
});

const validate = (data) => _validate(rejectOrganisation, data);

export default validate;
