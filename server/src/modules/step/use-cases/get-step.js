import * as Steps from '../model';
import translateSteps from '../../../services/translation/translate-steps';
import * as Translation from '../../translations/model';

const getStep = async ({ id, lng }) => {
  const step = await Steps.getStepById(id);

  const [stepT] = await translateSteps({
    lng,
    steps: [step],
  });

  if (!stepT.isTranslated) {
    Translation.createStepI18n({ stepId: stepT.id, ...stepT });
  }

  return stepT;
};

export default getStep;
