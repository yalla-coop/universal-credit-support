import { getSignedURL as getSignedURLService } from '../../../services/files-storage';

const getSignedURL = async ({
  userId,
  fileType,
  fileName,
  fileSize,
  fileCategory,
  fileMaxSize,
}) => {
  const { url, name, key, bucketRegion, bucket } = await getSignedURLService({
    userId,
    fileType,
    fileName,
    fileSize,
    fileCategory,
    fileMaxSize,
  });

  return { url, name, key, bucketRegion, bucket };
};

export default getSignedURL;
