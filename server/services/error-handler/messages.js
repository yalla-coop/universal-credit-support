const errors = {
  INVALID_USER_ROLE: 'invalid role',
  INVALID_TOKEN:
    'This is not a valid invite link to sign up. Please contact your therapist or someone from Chiltern Music Therapy.',
  EMAIL_ALREADY_EXISTS: 'A user account with that email already exists',
  PHONE_ALREADY_EXISTS:
    'A user account with that main contact number already exists',
  VALIDATION_ERROR: 'There was an issue with your request (validation error)',
  CUSTOM_ERROR_MESSAGE: 'error message for more details to user',
  NOT_FOUND: "We cannot find what you're looking for",
  UNAUTHORISED: 'You do not have permission to view this content',
  INVALID_RESET_TOKEN: 'This reset link does not exist or has expired',
  INVALID_EMAIL_OR_PASSWORD: 'Email and/or password are incorrect',
  UNAUTHORISED_EDIT: 'You do not have permission to do that',
  WRONG_DATA: 'something went wrong with matching your data',
  TOO_MANY_REQUESTS: 'too many requests try after {time}',
};

export default errors;
