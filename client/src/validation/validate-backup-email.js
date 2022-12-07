const validateBackupEmail = ({ email, backupEmail }) => {
  if (email === backupEmail) {
    // eslint-disable-next-line no-throw-literal
    throw {
      name: 'ValidationError',
      inner: {
        email: ['email and backup email must be different'],
        backupEmail: ['email and backup email must be different'],
      },
    };
  } else {
    return true;
  }
};

export default validateBackupEmail;
