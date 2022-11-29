import { AWSTranslateJSON } from 'aws-translate-json';
import config from '../../config';

const { awsAccessKeyId, awsSecretAccessKey, awsRegion } = config.aws;

const awsConfig = {
  accessKeyId: awsAccessKeyId,
  secretAccessKey: awsSecretAccessKey,
  region: awsRegion,
};

const translate = async ({ source, target, json, id }) => {
  const { translateJSON } = new AWSTranslateJSON(awsConfig, source, target);
  const value = await translateJSON(json);
  const res = { id, content: { ...value[target] }, languageCode: target[0] };
  return res;
};

export { translate };
