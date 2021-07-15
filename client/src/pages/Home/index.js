import { useEffect, useRef } from 'react';

import Card from '../../components/Cards';
import { Typography as T, Inputs as I } from '../../components';
import { t } from '../../helpers';
import { useLang } from '../../context/lang';
import { useSteps } from '../../context/steps';
import { navRoutes as n } from '../../constants';

import * as S from './style';

const Home = () => {
  const { lang, langOptions, setLang } = useLang();
  const { steps, justCompletedId, setJustCompletedId } = useSteps();
  const currentStep = steps.find((step) => !step.isCompleted);
  const currentStepRef = useRef();

  useEffect(() => {
    if (currentStepRef.current && justCompletedId) {
      currentStepRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [justCompletedId]);

  return (
    <>
      <S.PageHead>
        <S.HeadContainer>
          {' '}
          <T.H1 weight="bold">{t('universalCreditOverview', lang)}</T.H1>
          <T.P weight="bold" mt="6" mb="2">
            {t('selectYourLanguage', lang)}
          </T.P>
          <S.DropdownContainer>
            <I.Dropdown
              options={langOptions}
              selected={lang}
              handleChange={setLang}
            />
          </S.DropdownContainer>
          <T.P mt="6" mb="6">
            {t('overviewText', lang)}
          </T.P>
        </S.HeadContainer>
      </S.PageHead>
      {steps.map((step, i) => {
        const isCurrentStep = step.name === currentStep.name;
        const variant = step.isCompleted
          ? 'tertiary'
          : isCurrentStep
          ? 'secondary'
          : 'primary';
        const isJustCompletedOne = step.id === justCompletedId;
        // To only add ref to the currentStep
        const currentRef = isCurrentStep ? currentStepRef : null;
        return (
          <Card
            key={step.id}
            title={t(`${step.name}.title`, lang)}
            content={t(`${step.name}.subtitle`, lang)}
            isCompleted={step.isCompleted}
            variant={variant}
            direction={i % 2 === 0 ? 'left' : 'right'}
            mt="7"
            isJustCompletedOne={isJustCompletedOne}
            to={n.STEPS.STEP.replace(':id', step.id)}
            ref={currentRef}
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
