import axios from 'axios';
import handleError from './format-error';

const MEDIA_BASE = '/media';

const getSignedURL = async ({
  fileName,
  fileType,
  fileCategory,
  fileSize,
  fileMaxSize,
  options,
} = {}) => {
  try {
    const { data } = await axios.get(`${MEDIA_BASE}/`, {
      params: { fileType, fileName, fileCategory, fileSize, fileMaxSize },
    });

    return { data };
  } catch (error) {
    const err = handleError(error, options);

    return { error: err };
  }
};

const uploadToS3 = async ({ signedURL, file, options } = {}) => {
  try {
    const {
      config: {
        data: { size, name, type },
      },
    } = await axios.put(signedURL, file, options);

    return { data: { size, name, fileType: type, new: true } };
  } catch (error) {
    handleError(error, options);
    return {
      error: {
        error:
          (error.response && error.response.message) || 'somethingWentWrong',
        message:
          (error.response && error.response.statusText) || 'somethingWentWrong',
        httpStatusCode: (error.response && error.response.status) || 409,
      },
    };
  }
};

export { getSignedURL, uploadToS3 };
