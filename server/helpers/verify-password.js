import { compare } from 'bcryptjs';

const verifyPassword = (password, hash) => {
  return compare(password, hash);
};

export default verifyPassword;
