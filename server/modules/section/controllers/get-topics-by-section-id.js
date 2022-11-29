import * as Sections from '../use-cases';

const getTopicsBySectionId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { lng } = req.query;
    const topics = await Sections.getTopicsBySectionId({ id, lng });

    res.json(topics);
  } catch (error) {
    next(error);
  }
};

export default getTopicsBySectionId;
