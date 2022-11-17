import crypto from 'crypto';

const generateRandomPassword = () => {
  const buffer = crypto.randomBytes(32);
  const password = buffer.toString('hex');
  return password;
};

export default {
  password: generateRandomPassword(),
  hydeSuperAdmin: {
    firstName: 'Joe',
    lastName: 'Friel',
    email: process.env.HYDE_SUPER_ADMIN_EMAIL,
    backupEmail: process.env.HYDE_SUPER_ADMIN_EMAIL_BACKUP,
  },
};
