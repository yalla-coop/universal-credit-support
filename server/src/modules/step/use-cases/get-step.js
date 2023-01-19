import * as Steps from '../model';
// import translateSteps from '../../../services/translation/translate-steps';
// import * as Translation from '../../translations/model';

const getStep = async ({ id /* lng */ }) => {
  const step = await Steps.getStepById(id, 'en');
  return step;
  // return step as is for now, because we don't use this route for public
  // const [stepT] = await translateSteps({
  //   lng,
  //   steps: [step],
  // });

  // if (!stepT.isTranslated) {
  //   Translation.createStepI18n({ stepId: stepT.id, ...stepT });
  // }

  // return stepT;
};

export default getStep;
