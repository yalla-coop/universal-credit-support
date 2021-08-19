import * as yup from 'yup';

const envVarsSchema = yup
  .object({
    SENDER_EMAIL: yup.string().when('NODE_ENV', {
      is: 'test',
      then: yup.string(),
      otherwise: yup.string().required(),
    }),
    SENDER_PASSWORD: yup.string().when('NODE_ENV', {
      is: 'test',
      then: yup.string(),
      otherwise: yup.string().required(),
    }),
  })
  .required();

const config = () => {
  let envVars;
  try {
    envVars = envVarsSchema.validateSync(process.env, { stripUnknown: false });
  } catch (error) {
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
  }

  return {
    appUrl: envVars.APP_URL,
    senderEmail: envVars.SENDER_EMAIL,
    senderPassword: envVars.SENDER_PASSWORD,
  };
};

export default config;
