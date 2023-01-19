import * as yup from 'yup';

const isProduction = process.env.NODE_ENV === 'production';
const envVarsSchema = yup
  .object()
  .shape({
    PORT: isProduction ? yup.number().nullable() : yup.number().required(),
    DOMAIN: isProduction ? yup.string().required() : yup.string().nullable(),
    SECRET: yup.string().required(),
    HOST: isProduction
      ? yup.string().oneOf(['HEROKU', 'AWS']).required()
      : yup.string().nullable(), // to equal 'HEROKU' OR AWS
  })
  .required();

const config = () => {
  let envVars;
  try {
    envVars = envVarsSchema.validateSync(process.env, { stripUnknown: true });
  } catch (error) {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      throw new Error(`Config validation error: ${error.message}`);
    }
  }

  return {
    port: envVars.PORT,
    secret: envVars.SECRET,
    domain: envVars.DOMAIN,
    host: envVars.HOST || 'LOCAL',
  };
};

export default config;
