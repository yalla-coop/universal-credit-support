// import Boom from '@hapi/boom';
// import {
//   fields,
//   createSchema,
//   validate as _validate,
// } from '../../../services/validation';
// import { userRoles } from '../../../constants';
// import { errorMsgs } from '../../../services/error-handler';

// const { email, password, firstName, lastName } = fields;

// const signUp = createSchema({
//   email,
//   password,
// });

// const validate = (data) => {
//

//   if (data.role === userRoles.ADMIN)
//     return _validate(signUp, data);
//   throw Boom.badData(errorMsgs.INVALID_USER_ROLE);
// };

// export default validate;
