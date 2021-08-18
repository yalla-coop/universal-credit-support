import * as yup from 'yup';

const envVarsSchema = yup
  .object({
    BUCKET: yup.string().when('NODE_ENV', {
      is: 'test',
      then: yup.string(),
      otherwise: yup.string().required(),
    }),
    BUCKET_REGION: yup.string().when('NODE_ENV', {
      is: 'test',
      then: yup.string(),
      otherwise: yup.string().required(),
    }),
    AWS_ACCESS_KEY_ID: yup.string().when('NODE_ENV', {
      is: 'test',
      then: yup.string(),
      otherwise: yup.string().required(),
    }),
    AWS_SECRET_ACCESS_KEY: yup.string().when('NODE_ENV', {
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
    bucket: envVars.BUCKET,
    bucketRegion: envVars.BUCKET_REGION,
    awsAccessKeyId: envVars.AWS_ACCESS_KEY_ID,
    awsSecretAccessKey: envVars.AWS_SECRET_ACCESS_KEY,
  };
};

export default config;
