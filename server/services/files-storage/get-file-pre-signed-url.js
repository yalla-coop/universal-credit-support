import { S3 } from './config';

const getFilePreSignedUrl = async ({ key, bucket }) => {
  console.log(`"-------------"`, '-------------');
  const url = await S3.getSignedUrlPromise('getObject', {
    Bucket: bucket,
    Key: key,
  });

  return url;
};

export default getFilePreSignedUrl;
