import { S3 } from './config';
import config from '../../config';

const { env } = config.common;

const dummyDataKeys = [
  // add used files in dummy data
];

const deleteFile = async ({ bucket, key }) => {
  if (env !== 'test' && !dummyDataKeys.includes(key)) {
    const params = {
      Bucket: bucket,
      Key: key,
    };

    return S3.deleteObject(params).promise();
  }
};

export default deleteFile;
