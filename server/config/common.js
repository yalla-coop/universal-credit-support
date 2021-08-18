import * as yup from 'yup';

const envVarsSchema = yup
  .object({
    NODE_ENV: yup
      .string()
      .oneOf(['development', 'production', 'test'])
      .required(),
    APP_URL: yup.string().when('NODE_ENV', {
      is: 'test',
      then: yup.string(),
      otherwise: yup.string().required(),
    }),
    // SENTRY_DNS: yup.string().when('NODE_ENV', {
    //   is: 'production',
    //   then: yup.string().required(),
    //   otherwise: yup.string(),
    // }),
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
    env: envVars.NODE_ENV,
    appUrl: envVars.APP_URL,
    // sentryDNS: envVars.SENTRY_DNS,
  };
};

export default config;
