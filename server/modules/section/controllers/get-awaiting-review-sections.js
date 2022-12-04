import * as Sections from '../use-cases';

const getAwaitingReviewSection = async (req, res, next) => {
  try {
    const sections = await Sections.getAwaitingReviewSection();

    res.json(sections);
  } catch (error) {
    next(error);
  }
};

export default getAwaitingReviewSection;
