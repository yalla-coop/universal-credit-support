import { t } from '../helpers';
import { useLang } from '../context/lang';

const Home = () => {
  const { lang } = useLang();
  return (
    <>
      <h1>{t('universalCreditOverview', lang)}</h1>
      <div>{t('checkEligibility.title', lang)}</div>
      <div>{t('checkEligibility.checkListItems.incomeDetails', lang)}</div>
    </>
  );
};

export default Home;
