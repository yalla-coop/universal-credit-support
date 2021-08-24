import * as Steps from '../model';

const getSteps = async () => {
  const steps = await Steps.getSteps();
  const stepsWithChecklist = steps.map((step) => ({
    ...step,
    checklist: [step.thingsYouWillNeed, step.whatYouWillNeedToKnow].flat(),
  }));

  return stepsWithChecklist;
};

export default getSteps;
