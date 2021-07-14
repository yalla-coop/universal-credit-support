import Card from '../../components/Cards';
import { Typography as T, Inputs as I } from '../../components';
import { t } from '../../helpers';
import { useLang } from '../../context/lang';
import { useSteps } from '../../context/steps';
import { navRoutes as n } from '../../constants';

import { useEffect, useState } from 'react';

import * as S from './style';

const Home = () => {
  const [scrollValue, setScrollValue] = useState(null);

  const { lang, langOptions, setLang } = useLang();
  const {
    steps,
    setScrollTo,
    scrollTo,
    justCompleteOne,
    setJustCompleteOne,
  } = useSteps();
  const currentStep = steps.find((step) => !step.isCompleted);
  const prevCompleteStep = steps.indexOf(currentStep) - 1;

  useEffect(() => {
    const listener = () => {
      setScrollValue(window.scrollY);
    };
    if (justCompleteOne || scrollTo) {
      if (justCompleteOne) {
        window.scrollTo(0, parseInt(scrollTo));

        window.scrollTo({
          top: parseInt(scrollTo) + 180,
          left: 0,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo(0, parseInt(scrollTo));
      }
    }
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        const variant = step.isCompleted
          ? 'tertiary'
          : step.name === currentStep.name
          ? 'secondary'
          : 'primary';
        let isJustCompletedOne = i === prevCompleteStep;
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
            handleClick={() => {
              setScrollTo(scrollValue);
              setJustCompleteOne(false);
            }}
          />
        );
      })}
    </>
  );
};

export default Home;
