import * as steps from '../use-cases';

const updateStep = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      stage,
      stepOrder,
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

    const step = await steps.updateStep({
      id,
      stage,
      stepOrder,
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

    res.json(step);
  } catch (error) {
    next(error);
  }
};

export default updateStep;
