import * as Sections from '../use-cases';

const getSection = async (req, res, next) => {
  try {
    const { id } = req.params;
    const section = await Sections.getSection({ id });

    res.json(section);
  } catch (error) {
    next(error);
  }
};

export default getSection;
