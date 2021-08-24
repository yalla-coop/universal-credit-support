import { useState, useEffect } from 'react';
import { message } from 'antd';

import { Typography as T } from '../../components';
import { LandingPage } from '../../api-calls';
import { t } from '../../helpers';
import { useLang } from '../../context/lang';

import * as S from './style';

const formatText = (text) => {
  if (!text) return '';
  const arr = text.split(/\. |! |\? /gm);
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

const LandingContent = () => {
  const { lang } = useLang();
  const [landingContent, setLandingContent] = useState({});
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      const hideMessage = message.loading('Loading...');
      const { data, error } = await LandingPage.getLandingPageContent({});
      if (mounted) {
        if (error) {
          setFetchError(t(`generalError`, lang));
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
  }, [lang]);

  return (
    <>
      <S.PageHead>
        <S.HeaderText>
          {fetchError ? (
            <T.P color="error">{fetchError}</T.P>
          ) : (
            <T.H2 weight="bold" color="white">
              {landingContent.headline}
            </T.H2>
          )}
        </S.HeaderText>
      </S.PageHead>
      <S.Section>
        {formatText(landingContent.subtitle)}{' '}
        <S.StyledText mb="3">{landingContent.instructions}</S.StyledText>
      </S.Section>
    </>
  );
};

export default LandingContent;
