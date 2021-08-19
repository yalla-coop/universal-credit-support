import { useState, useEffect, useRef } from 'react';

import Card from '../../components/Cards';
import { Typography as T, Inputs as I } from '../../components';
import { t } from '../../helpers';
import { useLang } from '../../context/lang';
import { useSteps } from '../../context/steps';
import { navRoutes as n } from '../../constants';

import * as S from './style';

const dataToComeFromServer = {
  title: `Are you trying to work out how you actually claim for Universal
  Credit and feeling a bit lost?`,
  subtitle: `Don’t worry, we’ve got you! Click on each step below to work your way through the process.`,
  instructions: `Everything will be saved as you go so you can leave this tool and come back anytime. Always remember you can contact us whenever just by clicking that useful ‘Help Me!’ button.`,
};

const Home = () => {
  const { lang, langOptions, setLang } = useLang();
  const { steps: fullSteps, justCompletedId, setJustCompletedId } = useSteps();
  const [landingContent, setLandingContent] = useState({});
  const [steps, setSteps] = useState({
    beforeClaiming: [],
    claiming: [],
    afterClaiming: [],
  });
  const { beforeClaiming, claiming, afterClaiming } = steps;
  const currentStep = fullSteps.find((step) => !step.isCompleted);
  const currentStepRef = useRef();

  const formatText = (text) => {
    if (!text) return '';
    console.log('test', text);
    const arr = text.split(/\. |\! |\? /gm);
    console.log('test', arr);
    const firstSentence = arr[0];
    if (!arr[1]) return <T.H2 color="primaryMain">{firstSentence}</T.H2>;

    const remainder = arr.slice(1).join(' ');
    return (
      <>
        <T.H2 color="primaryMain" mr="2">
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

    return { variant, currentRef, isJustCompletedOne };
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
    // TO DO - api to get data from server
    setLandingContent(dataToComeFromServer);
    const stepsObj = fullSteps.reduce((acc, curr) => {
      const { stage } = curr;
      if (!acc[stage]) {
        acc[stage] = [];
      }
      acc[stage].push(curr);
      return acc;
    }, {});
    setSteps(stepsObj);
  }, []);

  return (
    <>
      <S.PageHead>
        <S.HeaderText>
          <T.H2 weight="bold" color="white">
            {landingContent.title}
          </T.H2>
        </S.HeaderText>
      </S.PageHead>
      <S.Intro>
        {formatText(landingContent.subtitle)}{' '}
        <S.StyledText>{landingContent.instructions}</S.StyledText>
      </S.Intro>

      {/* BEFORE CLAIMING */}
      {steps.beforeClaiming?.map((step, i) => {
        const { variant, currentRef, isJustCompletedOne } = getStepStatus(
          step,
          i
        );

        return (
          <Card
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
          <Card
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
      {steps.afterClaiming?.map((step, i) => {
        const { variant, currentRef, isJustCompletedOne } = getStepStatus(
          step,
          i
        );

        return (
          <Card
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
    </>
  );
};

export default Home;
