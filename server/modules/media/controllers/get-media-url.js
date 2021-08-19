import { getMediaUrl as getMediaUrlUseCase } from '../use-cases';

const getMediaUrl = async (req, res, next) => {
  try {
    const { key, bucket, bucketRegion } = req.query;

    const { id } = req.user;

    const fileInfo = await getMediaUrlUseCase({
      userId: id,
      key,
      bucket,
      bucketRegion,
    });
    res.json(fileInfo);
  } catch (error) {
    next(error);
  }
};

export default getMediaUrl;
