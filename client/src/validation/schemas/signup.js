import { fields, createSchema, validate as _validate } from '..';

import { roles } from './../../constants';

const { CLIENT, THERAPIST } = roles;

const {
  email,
  password,
  firstName,
  lastName,
  agreedOnTerms,
  agreedAge,
  inviteToken,
} = fields;

const client = createSchema({
  email,
  password,
  agreedOnTerms,
  agreedAge,
  inviteToken,
});

const therapist = createSchema({
  email,
  firstName,
  lastName,
  password,
  agreedOnTerms,
});

const validate = (data) => {
  if (data.role === CLIENT) return _validate(client, data);
  if (data.role === THERAPIST) return _validate(therapist, data);
};

export default validate;
