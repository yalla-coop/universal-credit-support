import * as Sections from '../use-cases';

const getTopicsBySectionId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { lang } = req.query;
    const topics = await Sections.getTopicsBySectionId({ id, lang });

    res.json(topics);
  } catch (error) {
    next(error);
  }
};

export default getTopicsBySectionId;
