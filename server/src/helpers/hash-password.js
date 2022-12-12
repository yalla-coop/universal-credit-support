import { hash } from 'bcryptjs';

const hashPassword = (password) => hash(password, 8);

export default hashPassword;
