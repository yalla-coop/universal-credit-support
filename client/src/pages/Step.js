import { useParams } from 'react-router-dom';

import { CallUsLink } from '../components';
import { useSteps } from '../context/steps';
import { useLang } from '../context/lang';
import { t } from '../helpers';
import { navRoutes as n } from '../constants';

function Step() {
  const params = useParams();
  const { lang } = useLang();
  // eslint-disable-next-line no-unused-vars
  const { steps, checkUncheckItem } = useSteps();

  const step = steps.find((s) => s.id === params.id);

  return (
    <div>
      <div>{t(`${step.name}.secondaryTitle`, lang)}</div>
      <div>{t(`${step.name}.externalButtonTitle`, lang)}</div>
      <div>{t('informationYouWillNeed', lang)}</div>
      {step.checkListItems.map((item) => (
        <div key={item.value}>
          {t(`${step.name}.checkListItems.${item.value}`, lang)}
        </div>
      ))}
      {step.externalLink && (
        <CallUsLink
          text={t('callUsLinkText', lang)}
          href={n.EXTERNAL.CALL_US}
          target="_blank"
          rel="noopener noreferrer"
        />
      )}
    </div>
  );
}

export default Step;
