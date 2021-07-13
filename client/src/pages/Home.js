import Card from '../components/Cards';
import { Typography as T, Inputs as I } from '../components';
import { t } from '../helpers';
import { useLang } from '../context/lang';
import { useSteps } from '../context/steps';
import { navRoutes as n } from '../constants';

const Home = () => {
  const { lang, langOptions, setLang } = useLang();
  const { steps } = useSteps();

  const currentStep = steps.find((step) => !step.isCompleted);

  return (
    <>
      <T.H1 weight="bold">{t('universalCreditOverview', lang)}</T.H1>
      <T.P weight="bold" mt="6" mb="2">
        {t('selectYourLanguage', lang)}
      </T.P>
      <I.Dropdown
        options={langOptions}
        selected={lang}
        handleChange={setLang}
      />
      <T.P mt="6" mb="6">
        {t('overviewText', lang)}
      </T.P>
      {steps.map((step, i) => {
        const variant = step.isCompleted
          ? 'tertiary'
          : step.name === currentStep.name
          ? 'secondary'
          : 'primary';
        return (
          <Card
            key={step.id}
            title={t(`${step.name}.title`, lang)}
            content={t(`${step.name}.subtitle`, lang)}
            isCompleted={step.isCompleted}
            variant={variant}
            direction={i % 2 === 0 ? 'left' : 'right'}
            mt="7"
            to={n.STEPS.STEP.replace(':id', step.id)}
          />
        );
      })}
    </>
  );
};

export default Home;
