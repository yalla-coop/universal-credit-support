import * as yup from 'yup';

const envVarsSchema = yup
  .object({
    SQREEN_APP_NAME: yup.string().when('NODE_ENV', {
      is: 'production',
      then: yup.string().required(),
      otherwise: yup.string(),
    }),
    SQREEN_TOKEN: yup.string().when('NODE_ENV', {
      is: 'production',
      then: yup.string().required(),
      otherwise: yup.string(),
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
    sqreenAppName: envVars.SQREEN_APP_NAME,
    sqreenToken: envVars.SQREEN_TOKEN,
  };
};

export default config;
