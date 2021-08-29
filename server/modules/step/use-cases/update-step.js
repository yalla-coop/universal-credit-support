import * as Steps from '../model';

const updateStep = async ({
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
}) => {
  const step = await Steps.updateStep({
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
  });

  return step;
};

export default updateStep;
