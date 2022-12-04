import { useState, useEffect, useRef } from 'react';
import { generatePath } from 'react-router-dom';
import ReactGA from 'react-ga';
import Step from '../../components/Steps';
import { Typography as T } from '../../components';
import { useSteps } from '../../context/steps';
import { navRoutes as n, common } from '../../constants';
import LandingContent from './LandingContent';
import { stageTypes } from './../../constants/data-types';
import { useTranslation } from 'react-i18next';
import Icon from '../../components/Icon';
import HelpButton from '../../components/HelpButton';
import TextWithIcon from '../../components/TextWithIcon';
import { usePublicOrg } from './../../context/public-org';
import * as S from './style';
import { useLanguage } from '../../helpers';

const Home = () => {
  const { t } = useTranslation();
  const { lng, dir } = useLanguage();
  const { publicOrg } = usePublicOrg();
  const { uniqueSlug } = publicOrg;
  const { steps, justCompletedId, setJustCompletedId, loadingSteps } =
    useSteps();

  const [showAfterClaim, setShowAfterClaim] = useState(false);

  const currentStep = steps.find(
    (step) => !step.isCompleted && step.stage !== stageTypes.BEFORE_CLAIMING
  );
  const currentStepRef = useRef();

  const completedClaim = currentStep?.stage === stageTypes.AFTER_CLAIMING;

  const getStepStatus = (step, i) => {
    const isCurrentStep = currentStep && step.id === currentStep.id;
    const variant = step.isCompleted
      ? 'neutral'
      : isCurrentStep
      ? 'primary'
      : 'secondary';
    const isJustCompletedOne = step.id === justCompletedId;
    // To only add ref to the currentStep
    let currentRef = isCurrentStep ? currentStepRef : null;
    if (i === steps.length - 1 && step.isCompleted) {
      currentRef = currentStepRef;
    }

    return { variant, currentRef, isJustCompletedOne, isCurrentStep };
  };

  const decideRoute = (step) =>
    generatePath(n.GENERAL.STEP_ORG, {
      uniqueSlug: publicOrg?.uniqueSlug,
      id: step.id,
    });

  useEffect(() => {
    if (currentStepRef.current && justCompletedId) {
      currentStepRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }

    if (process.env.NODE_ENV === 'production') {
      ReactGA.event({
        category: 'Completed step',
        action: currentStep?.title,
      });

      if (completedClaim) {
        ReactGA.event({
          category: 'Completed claim',
          action: 'Completed claim',
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [justCompletedId]);

  const _stepsObj = t('stepsObj', {
    ns: 'stepsObj',
    returnObjects: true,
  });

  const completed = t(
    'common.section.afterClaimContent.title.completed',
    common.section.afterClaimContent.title.completed
  );

  const notCompleted = t(
    'common.section.afterClaimContent.title.notCompleted',
    common.section.afterClaimContent.title.notCompleted
  );

  const completedText = t(
    'common.section.afterClaimContent.title.completed',
    common.section.afterClaimContent.title.completed
  );

  const notCompletedText = t(
    'common.section.afterClaimContent.text.notCompleted',
    common.section.afterClaimContent.text.notCompleted
  );

  return (
    <>
      <LandingContent uniqueSlug={uniqueSlug} />

      {/* BEFORE CLAIMING */}
      {_stepsObj.BEFORE_CLAIMING?.map((step, i) => {
        const { variant, currentRef, isJustCompletedOne } = getStepStatus(
          step,
          i
        );

        return (
          <Step
            key={step.id}
            title={step.title}
            description={step.description}
            content={t(`${step.name}.subtitle`, lng)}
            isCompleted={step.isCompleted}
            variant={variant}
            direction={i % 2 === 0 ? 'left' : 'right'}
            mt="7"
            isJustCompletedOne={isJustCompletedOne}
            to={decideRoute(step)}
            ref={currentRef}
            isOptional={step.isOptional}
            handleClick={() => {
              setJustCompletedId('');
            }}
            loadingSteps={loadingSteps}
          />
        );
      })}

      {/* CLAIMING */}
      {_stepsObj.CLAIMING?.map((step, i) => {
        const { variant, currentRef, isJustCompletedOne } = getStepStatus(
          step,
          i
        );

        return (
          <Step
            key={step.id}
            title={step.title}
            description={step.description}
            content={t(`${step.name}.subtitle`, lng)}
            isCompleted={step.isCompleted}
            variant={variant}
            direction={i % 2 === (dir === 'ltr' ? 0 : 1) ? 'left' : 'right'}
            mt="7"
            isJustCompletedOne={isJustCompletedOne}
            to={decideRoute(step)}
            ref={currentRef}
            isOptional={step.isOptional}
            handleClick={() => {
              setJustCompletedId('');
            }}
            loadingSteps={loadingSteps}
          />
        );
      })}

      {/* AFTER CLAIMING */}
      <S.Section mt="7">
        <Icon icon="flag" color="primaryMain" mt="6" mb="5" mbM="0" mtM="5" />
        <T.H2 color="neutralMain" mb="1">
          {completedClaim ? completed : notCompleted}
        </T.H2>
        <S.StyledText>
          {completedClaim ? completedText : notCompletedText}
        </S.StyledText>
        {!completedClaim && !showAfterClaim && (
          <S.Container mt="4">
            <TextWithIcon
              isButton
              handleClick={() => setShowAfterClaim(true)}
              text={t('common.buttons.viewSteps', common.buttons.viewSteps)}
              jc="flex-start"
              weight="500"
              iconProps={{
                icon: 'bulletArrow',
                color: 'primaryMain',
              }}
            />
          </S.Container>
        )}
      </S.Section>

      {(completedClaim || showAfterClaim) &&
        _stepsObj.AFTER_CLAIMING?.map((step, i) => {
          const { variant, currentRef, isJustCompletedOne } = getStepStatus(
            step,
            i
          );

          return (
            <Step
              key={step.id}
              title={step.title}
              description={step.description}
              content={t(`${step.name}.subtitle`, lng)}
              isCompleted={step.isCompleted}
              variant={variant}
              direction={i % 2 === 0 ? 'left' : 'right'}
              mt="7"
              isJustCompletedOne={isJustCompletedOne}
              to={decideRoute(step)}
              ref={currentRef}
              isOptional={step.isOptional}
              handleClick={() => {
                setJustCompletedId('');
              }}
              loadingSteps={loadingSteps}
            />
          );
        })}
      <HelpButton />
    </>
  );
};

export default Home;
