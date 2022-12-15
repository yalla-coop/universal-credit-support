/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import AWS from 'aws-sdk';
import config from '../../config';
import { Sentry } from '../error-handler';
import { removeNullsAndEmptyArraysAndObjects } from '../../helpers';

const { awsAccessKeyId, awsSecretAccessKey, awsRegion } = config.aws;

const awsConfig = {
  accessKeyId: awsAccessKeyId,
  secretAccessKey: awsSecretAccessKey,
  region: awsRegion,
};

const translateAWS = new AWS.Translate(awsConfig);

const translateText = async ({ text = '', sourceLang, targetLang }) => {
  if (!targetLang || !sourceLang) {
    throw new Error('Missing source or target lang');
  }
  const params = {
    SourceLanguageCode: sourceLang,
    TargetLanguageCode: targetLang,
    Text: text,
  };

  try {
    const translationData = await translateAWS.translateText(params).promise();
    return translationData.TranslatedText;
  } catch (error) {
    throw new Error('translateText API error :>> ', error);
  }
};

const translateJSON = async ({
  obj,
  targetLang,
  sourceLang,
  displayLang = true,
}) => {
  const response = {};

  for (const key in obj) {
    let word = '';
    try {
      // recursively narrow down object keys that are not strings to eventually call AWS translateText
      if (typeof obj[key] === 'object') {
        word = await translateJSON({
          obj: obj[key],
          targetLang,
          sourceLang,
          displayLang: false,
        });
      } else {
        word = await translateText({ text: obj[key], sourceLang, targetLang });
      }
    } catch (error) {
      Sentry.captureException('translateJSON API error:', error);
      word = '';
    }
    if (displayLang) {
      response[targetLang] = response[targetLang] || {};
      response[targetLang][key] = word;
    } else {
      response[key] = word;
    }
  }
  return response;
};

const translate = async ({ source, target, json, id }) => {
  if (!source || !target || !json) {
    throw new Error('translation API missing params');
  }

  const value = await translateJSON({
    obj: removeNullsAndEmptyArraysAndObjects(json),
    targetLang: target[0],
    sourceLang: source,
  });
  if (value) {
    return { id, content: { ...value[target] }, languageCode: target[0] };
  }
  throw new Error('translation API error');
};

export { translate };
