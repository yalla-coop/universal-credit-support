import * as Sections from '../use-cases';

const getSubSections = async (req, res, next) => {
  try {
    const { id, forPublic, lng } = req.query;

    const sections = await Sections.getSubSections({
      id,
      forPublic: JSON.parse(forPublic || null),
      lng,
    });

    res.json(sections);
  } catch (error) {
    next(error);
  }
};

export default getSubSections;
