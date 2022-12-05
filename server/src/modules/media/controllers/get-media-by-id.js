import * as Media from '../use-cases';

const getMediaById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const media = await Media.getMediaById({ id });
    res.json(media);
  } catch (error) {
    next(error);
  }
};

export default getMediaById;
