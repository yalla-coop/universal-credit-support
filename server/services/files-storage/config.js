import AWS from 'aws-sdk';
import config from '../../config';

const { env } = config.common;

const { awsAccessKeyId, bucket, bucketRegion, awsSecretAccessKey } = config.aws;

let s3;
if (env !== 'test') {
  s3 = new AWS.S3({
    accessKeyId: awsAccessKeyId,
    secretAccessKey: awsSecretAccessKey,
    region: bucketRegion,
  });
}

const S3 = s3;

const allowedFileTypesAndSizes = {
  LOGO: {
    types: ['image/png', 'image/jpg', 'image/jpeg'],
    maxSize: '5',
  },
};

const preFixes = {
  temp: 'temp/',
  root: '',
};

export {
  S3,
  bucket,
  bucketRegion as region,
  allowedFileTypesAndSizes,
  preFixes,
};
