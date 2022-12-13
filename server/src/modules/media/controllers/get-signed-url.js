import { getSignedURL as getSignedURLUseCase } from '../use-cases';

const getSignedURL = async (req, res, next) => {
  try {
    const {
      fileType,
      fileName,
      fileSize,
      fileCategory,
      fileMaxSize,
    } = req.query;

    const { id } = req.user;

    const fileInfo = await getSignedURLUseCase({
      fileType,
      userId: id,
      fileName,
      fileSize,
      fileCategory,
      fileMaxSize,
    });
    res.json(fileInfo);
  } catch (error) {
    next(error);
  }
};

export default getSignedURL;
