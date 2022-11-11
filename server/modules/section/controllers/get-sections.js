import * as Sections from '../use-cases';

const getSections = async (req, res, next) => {
  try {
    const sections = await Sections.getSections({});

    res.json(sections);
  } catch (error) {
    next(error);
  }
};

export default getSections;
