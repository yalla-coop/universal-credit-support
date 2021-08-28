import * as yup from 'yup';

const envVarsSchema = yup
  .object()
  .shape({
    SENDGRID_API_KEY: yup.string().required(),
    SENDER_EMAIL: yup.string().required(),
    APP_URL: yup.string().required(),
  })
  .required();

const config = () => {
  let envVars;
  try {
    envVars = envVarsSchema.validateSync(process.env, { stripUnknown: true });
  } catch (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return {
    sendGridApiKey: envVars.SENDGRID_API_KEY,
    senderEmail: envVars.SENDER_EMAIL,
    appUrl: envVars.APP_URL,
  };
};

export default config;
