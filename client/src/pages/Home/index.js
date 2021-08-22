import { useState, useEffect, useRef } from 'react';

import Step from '../../components/Steps';
import { Typography as T, Inputs as I } from '../../components';
import { t } from '../../helpers';
import { useLang } from '../../context/lang';
import { useSteps } from '../../context/steps';
import { navRoutes as n } from '../../constants';

import Icon from '../../components/Icon';
import HelpButton from '../../components/HelpButton';
import TextWithIcon from '../../components/TextWithIcon';

import { LandingPage } from '../../api-calls';

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
  const { steps: fullSteps, justCompletedId, setJustCompletedId } = useSteps();
  const [landingContent, setLandingContent] = useState({});
  const [steps, setSteps] = useState({
    beforeClaiming: [],
    claiming: [],
    afterClaiming: [],
  });
  const [showAfterClaim, setShowAfterClaim] = useState(false);
  const [fetchError, setFetchError] = useState('');

  const currentStep = fullSteps.find((step) => !step.isCompleted);
  const currentStepRef = useRef();

  const completedClaim = currentStep?.stage === 'afterClaiming';

  const formatText = (text) => {
    if (!text) return '';
    const arr = text.split(/\. |\! |\? /gm);
    const firstSentence = arr[0];
    if (!arr[1]) return <T.H2 color="primaryMain">{firstSentence}</T.H2>;

    const remainder = arr.slice(1).join(' ');
    return (
      <>
        <T.H2 color="primaryMain" mb="2" mr="2" mt="2">
          {firstSentence}! <S.Span>{remainder}</S.Span>
        </T.H2>
      </>
    );
  };

  const getStepStatus = (step, i) => {
    const isCurrentStep = currentStep && step.name === currentStep.name;
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

  useEffect(() => {
    if (currentStepRef.current && justCompletedId) {
      currentStepRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [justCompletedId]);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      const { data, error } = await LandingPage.getLandingPageContent({});
      if (mounted) {
        if (error) {
          setFetchError(error.message);
        } else {
          setLandingContent(data);
        }
      }
    }

    fetchData();

    const stepsObj = fullSteps.reduce((acc, curr) => {
      const { stage } = curr;
      if (!acc[stage]) {
        acc[stage] = [];
      }
      acc[stage].push(curr);
      return acc;
    }, {});
    if (mounted) {
      setSteps(stepsObj);
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <S.PageHead>
        <S.HeaderText>
          <T.H2 weight="bold" color="white">
            {landingContent.headline}
          </T.H2>
        </S.HeaderText>
      </S.PageHead>
      <S.Section>
        {formatText(landingContent.subtitle)}{' '}
        <S.StyledText mb="3">{landingContent.instructions}</S.StyledText>
      </S.Section>

      {/* BEFORE CLAIMING */}
      {steps.beforeClaiming?.map((step, i) => {
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
            to={n.STEPS.STEP.replace(':id', step.id)}
            ref={currentRef}
            isOptional={step.isOptional}
            handleClick={() => {
              setJustCompletedId('');
            }}
          />
        );
      })}

      {/* CLAIMING */}
      {steps.claiming?.map((step, i) => {
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
            to={n.STEPS.STEP.replace(':id', step.id)}
            ref={currentRef}
            isOptional={step.isOptional}
            handleClick={() => {
              setJustCompletedId('');
            }}
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
        steps.afterClaiming?.map((step, i) => {
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
              to={n.STEPS.STEP.replace(':id', step.id)}
              ref={currentRef}
              isOptional={step.isOptional}
              handleClick={() => {
                setJustCompletedId('');
              }}
            />
          );
        })}
      <HelpButton />
    </>
  );
};

export default Home;
