import Boom from '@hapi/boom';
import { v4 as uuid } from 'uuid';

import {
  S3,
  bucket,
  region,
  allowedFileTypesAndSizes,
  preFixes,
} from './config';

const { temp } = preFixes;

const getSignedURL = async ({
  userId,
  fileType,
  fileCategory,
  fileName,
  fileSize,
  fileMaxSize,
}) => {
  // store file first in temp folder
  const key = `${temp}${userId}/${fileType}-${uuid()}-${fileName}`;

  const sizeInMb = fileSize > 0 && fileSize / 1024 / 1024;

  //  check 1: correct file type
  if (!allowedFileTypesAndSizes[fileCategory].types.includes(fileType)) {
    throw Boom.badRequest(
      `File is not a ${allowedFileTypesAndSizes[fileCategory].types} file`,
    );

    // check 2: max size
  } else if (
    fileMaxSize
      ? fileMaxSize < sizeInMb
      : allowedFileTypesAndSizes[fileCategory].maxSize < sizeInMb
  ) {
    throw Boom.badRequest(
      `File is too large. Maximum file size is ${
        fileMaxSize || allowedFileTypesAndSizes[fileCategory].maxSize
      } MBs`,
    );
  }

  const url = await S3.getSignedUrlPromise('putObject', {
    Bucket: bucket,
    ContentType: fileType,
    Key: key,
  });

  return { url, name: fileName, key, bucketRegion: region, bucket };
};

export default getSignedURL;
