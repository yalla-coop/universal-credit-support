import Boom from '@hapi/boom';
import {
  fields,
  createSchema,
  validate as _validate,
} from '../../../services/validation';
import { userRoles } from '../../../constants';
import { errorMsgs } from '../../../services/error-handler';

const {
  firstName,
  lastName,
  email,
  password,
  agreedOnTerms,
  requiredText,
} = fields;

const signUp = createSchema({
  firstName,
  lastName,
  email,
  backupEmail: email,
  password,
  organisationName: requiredText,
  typeOfOrganisation: requiredText,
  agreedOnTerms,
});

const validate = (data) => {
  if (data.role === userRoles.ADMIN) return _validate(signUp, data);
  throw Boom.badData(errorMsgs.INVALID_USER_ROLE);
};

export default validate;
