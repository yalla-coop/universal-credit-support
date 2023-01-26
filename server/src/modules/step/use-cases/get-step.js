import * as Steps from '../model';
import translateSteps from '../../../services/translation/translate-steps';
import * as Translation from '../../translations/model';

const getStep = async ({ id, lng, forPublic }) => {
  const step = await Steps.getStepById(id, lng);
  if (!forPublic) {
    return step;
  }

  const [stepT] = await translateSteps({
    lng,
    steps: [step],
  });

  if (!stepT.isTranslated || !step.allFieldsTranslated) {
    Translation.createStepI18n({
      stepId: stepT.id,
      ...stepT,
      allFieldsTranslated: true,
    });
  }

  return {
    ...stepT,
    id: step.id,
    checklist: [
      stepT.thingsYouWillNeed.map((item) => ({
        ...item,
        stage: 'thingsYouWillNeed',
      })),
      stepT.whatYouWillNeedToKnow.map((item) => ({
        ...item,
        stage: 'whatYouWillNeedToKnow',
      })),
    ].flat(),
  };
};

export default getStep;
