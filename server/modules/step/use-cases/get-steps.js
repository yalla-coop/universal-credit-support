import * as Steps from '../model';

const getSteps = async () => {
  const steps = await Steps.getSteps();
  const stepsWithChecklist = steps.map((step, index) => ({
    ...step,
    id: index + 1,
    checklist: [
      step.thingsYouWillNeed.map((item) => ({
        ...item,
        stage: 'thingsYouWillNeed',
      })),
      step.whatYouWillNeedToKnow.map((item) => ({
        ...item,
        stage: 'whatYouWillNeedToKnow',
      })),
    ].flat(),
  }));

  return stepsWithChecklist;
};

export default getSteps;
