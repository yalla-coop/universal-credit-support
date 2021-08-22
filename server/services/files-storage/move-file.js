import { S3, preFixes } from './config';
import config from '../../config';

const { env } = config.common;

const { temp, root } = preFixes;

// for files that don't get submitted -> stay in temp folder getting automatically removed after 1 day
// for submitted files -> move them to root folder and delete them from temp folder (to save storage)
// There isn't a move operation in the S3 API, it's standard practice to copy an object, then to delete it.

const moveFile = async ({ bucket, key }) => {
  let newKey = key;
  if (env !== 'test') {
    newKey = newKey.replace(temp, root);
    // copy object to root folder
    await S3.copyObject({
      Bucket: bucket,
      CopySource: encodeURI(`${bucket}/${key}`), // old file Key
      Key: newKey, // new file key
    }).promise();

    // delete from /temp folder
    await S3.deleteObject({ Bucket: bucket, Key: key }).promise();
  }
  return { newKey };
};

export default moveFile;
