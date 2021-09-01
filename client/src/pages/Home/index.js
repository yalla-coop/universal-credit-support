import { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Step from '../../components/Steps';
import { Typography as T } from '../../components';
import { t } from '../../helpers';
import { useLang } from '../../context/lang';
import { useSteps } from '../../context/steps';
import { navRoutes as n } from '../../constants';
import LandingContent from './LandingContent';
import { stageTypes } from './../../constants/data-types';

import Icon from '../../components/Icon';
import HelpButton from '../../components/HelpButton';
import TextWithIcon from '../../components/TextWithIcon';

import * as S from './style';

const afterClaimContent = {
  title: {
    completed: 'You’re all done!',
    notCompleted: `What should I do once I am granted Universal Credit?`,
  },
  text: {
    completed: `Got your Universal Credit? Great news! Check out these steps on what to do next:`,
    notCompleted: `Once you’ve completed your claim there are few additional steps you can take. Open this when you’re completed the above steps`,
  },
};

const Home = () => {
  const { lang } = useLang();
  const {
    steps,
    justCompletedId,
    setJustCompletedId,
    loadingSteps,
    stepsObj,
  } = useSteps();

  const [showAfterClaim, setShowAfterClaim] = useState(false);

  const currentStep = steps.find(
    (step) => !step.isCompleted && step.stage !== stageTypes.BEFORE_CLAIMING
  );
  const currentStepRef = useRef();
  const { org } = useParams();
  const history = useHistory();

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
    org
      ? n.STEPS.STEP_ORG.replace(':id', step.id).replace(':org', org)
      : n.STEPS.STEP.replace(':id', step.id);

  useEffect(() => {
    if (currentStepRef.current && justCompletedId) {
      currentStepRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [justCompletedId]);

  useEffect(() => {
    if (org) {
      history.push(n.GENERAL.HOME_ORG.replace(':org', org));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [org]);

  return (
    <>
      <LandingContent uniqueSlug={org} />

      {/* BEFORE CLAIMING */}
      {stepsObj.BEFORE_CLAIMING?.map((step, i) => {
        const { variant, currentRef, isJustCompletedOne } = getStepStatus(
          step,
          i
        );

        return (
          <Step
            key={step.id}
            title={step.title}
            description={step.description}
            content={t(`${step.name}.subtitle`, lang)}
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
      {stepsObj.CLAIMING?.map((step, i) => {
        const { variant, currentRef, isJustCompletedOne } = getStepStatus(
          step,
          i
        );

        return (
          <Step
            key={step.id}
            title={step.title}
            description={step.description}
            content={t(`${step.name}.subtitle`, lang)}
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

      {/* AFTER CLAIMING */}
      <S.Section mt="7">
        <Icon icon="flag" mt="6" mb="5" mbM="0" mtM="5" />
        <T.H2 color="neutralMain" mb="1">
          {
            afterClaimContent.title[
              completedClaim ? 'completed' : 'notCompleted'
            ]
          }
        </T.H2>
        <S.StyledText>
          {
            afterClaimContent.text[
              completedClaim ? 'completed' : 'notCompleted'
            ]
          }
        </S.StyledText>
        {!completedClaim && !showAfterClaim && (
          <S.Container mt="4">
            <TextWithIcon
              icon="bulletArrow"
              iconColor="primaryMain"
              isButton
              handleClick={() => setShowAfterClaim(true)}
              text="View steps"
              jc="flex-start"
              weight="500"
            />
          </S.Container>
        )}
      </S.Section>

      {(completedClaim || showAfterClaim) &&
        stepsObj.AFTER_CLAIMING?.map((step, i) => {
          const { variant, currentRef, isJustCompletedOne } = getStepStatus(
            step,
            i
          );

          return (
            <Step
              key={step.id}
              title={step.title}
              description={step.description}
              content={t(`${step.name}.subtitle`, lang)}
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
