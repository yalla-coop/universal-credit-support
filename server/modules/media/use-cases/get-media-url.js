import Boom from '@hapi/boom';
import { getFilePreSignedUrl as getMediaUrlService } from '../../../services/files-storage';
import { errorMsgs } from '../../../services/error-handler';

// get media url is only called when showing temp files
const getMediaUrl = async ({ userId, key, bucket }) => {
  const keyUserId = key.split('/')[1];

  if (Number(keyUserId) !== Number(userId)) {
    throw Boom.unauthorized(errorMsgs.UNAUTHORISED);
  }

  const mediaUrl = await getMediaUrlService({
    key,
    bucket,
  });
  return mediaUrl;
};

export default getMediaUrl;
