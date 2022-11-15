import * as Sections from '../use-cases';

const getSubSections = async (req, res, next) => {
  try {
    const { id, forPublic } = req.query;

    const sections = await Sections.getSubSections({ id, forPublic });

    res.json(sections);
  } catch (error) {
    next(error);
  }
};

export default getSubSections;
