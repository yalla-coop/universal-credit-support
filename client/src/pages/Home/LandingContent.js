import { useState, useEffect } from 'react';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';
import { Typography as T } from '../../components';
import { LandingPage } from '../../api-calls';
import { t } from '../../helpers';
import { useLang } from '../../context/lang';
import { usePublicOrg } from '../../context/public-org';

import * as S from './style';

const formatText = (text) => {
  if (!text) return '';
  const arr = text.split(/\. |! |\? /gm);
  const firstSentence = arr[0];
  if (!arr[1]) return <T.H2 color="primaryDark">{firstSentence}</T.H2>;

  const remainder = arr.slice(1).join(' ');
  return (
    <>
      <T.H2 color="primaryDark" mb="2" mr="2" mt="2">
        {firstSentence}! <S.Span>{remainder}</S.Span>
      </T.H2>
    </>
  );
};

const LandingContent = ({ uniqueSlug }) => {
  const { i18n, t } = useTranslation();
  const { language: lng } = i18n;
  const { publicOrg } = usePublicOrg();
  const [landingContent, setLandingContent] = useState({});
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      const hideMessage = message.loading('Loading...');
      const { data, error } = await LandingPage.getLandingPageContent({ lng });
      if (mounted) {
        if (error) {
          setFetchError(t(`generalError`, lng));
        } else {
          setLandingContent(data);
        }
        hideMessage();
      }
    }

    fetchData();
    return () => {
      mounted = false;
    };
  }, [lng]);

  i18n.addResourceBundle(lng, 'landingContent', {
    landingContent,
  });

  const _landingContent = t('landingContent', {
    ns: 'landingContent',
    returnObjects: true,
  });

  return (
    <>
      <S.PageHead
        showBGImage={!uniqueSlug || (publicOrg && Number(publicOrg?.id) === 1)}
      >
        <S.HeaderText>
          {fetchError ? (
            <T.P color="error">{fetchError}</T.P>
          ) : (
            <T.H2 weight="bold" color="primaryTextMain">
              {_landingContent.headline}
            </T.H2>
          )}
        </S.HeaderText>
      </S.PageHead>
      <S.Section>
        {formatText(_landingContent.subtitle)}{' '}
        <S.StyledText mb="3">{_landingContent.instructions}</S.StyledText>
      </S.Section>
    </>
  );
};

export default LandingContent;
