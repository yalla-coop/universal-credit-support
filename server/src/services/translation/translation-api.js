import { AWSTranslateJSON } from 'aws-translate-json';
import config from '../../config';
import { removeNullsAndEmptyArraysAndObjects } from '../../helpers';

const { awsAccessKeyId, awsSecretAccessKey, awsRegion } = config.aws;

const awsConfig = {
  accessKeyId: awsAccessKeyId,
  secretAccessKey: awsSecretAccessKey,
  region: awsRegion,
};

const translate = async ({ source, target, json, id }) => {
  if (!source || !target || !json || !id) {
    throw new Error('translation api: missing parameters');
  }
  const AWSTranslateJSONInst = new AWSTranslateJSON(awsConfig, source, target);

  const translateJSON = async (_retries) => {
    try {
      const value = await AWSTranslateJSONInst.translateJSON(
        removeNullsAndEmptyArraysAndObjects(json),
      );
      return {
        id,
        content: { ...(value[target] || value[target[0]]) },
        languageCode: target[0],
      };
    } catch (error) {
      if (_retries > 3) {
        throw error;
      } else {
        return translateJSON(_retries + 1);
      }
    }
  };

  try {
    const res = await translateJSON(0);
    return res;
  } catch (error) {
    throw new Error('translation api error: ', error);
  }
};

export { translate };
