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
      Translation.createStepI18n({
        stepId: c.id,
        title: c.title,
        description: c.description,
        languageCode: c.languageCode,
        allFieldsTranslated: false,
      });
    }
  });

  const stepsTWithChecklist = stepsT.map((step) => {
    return {
      ...step,
      id: step.id,
    };
  });

  return stepsTWithChecklist;
};

export default getSteps;
