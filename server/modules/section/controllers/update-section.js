import * as Sections from '../use-cases';

const updateSection = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      stage,
      title,
      description,
      pageTitle,
      pageDescription,
      howLongDoesItTake,
      whereDoYouNeedToGo,
      thingsYouWillNeed,
      whatYouWillNeedToKnow,
      topTip,
      otherTips,
      isOptional,
    } = req.body;

    const { id: userId } = req.user;

    const section = await Sections.updateSection({
      id,
      stage,
      title,
      description,
      pageTitle,
      pageDescription,
      howLongDoesItTake,
      whereDoYouNeedToGo,
      thingsYouWillNeed,
      whatYouWillNeedToKnow,
      topTip,
      otherTips,
      isOptional,
      userId,
    });

    res.json(section);
  } catch (error) {
    next(error);
  }
};

export default updateSection;
