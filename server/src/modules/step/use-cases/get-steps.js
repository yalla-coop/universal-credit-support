import * as Steps from '../model';
import translateSteps from '../../../services/translation/translate-steps';
import * as Translation from '../../translations/model';

const getSteps = async ({ lng }) => {
  const steps = await Steps.getSteps(lng);
  const stepsT = await translateSteps({
    lng,
    steps,
  });

  stepsT.forEach((c) => {
    if (!c.isTranslated) {
      Translation.createStepI18n({ stepId: c.id, ...c });
    }
  });

  const stepsTWithChecklist = stepsT.map((step, index) => {
    return {
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
    };
  });

  return stepsTWithChecklist;
};

export default getSteps;
