import { navRoutes } from '../../constants';
import { Typography as T } from '../../components';
import { useTranslation, Trans } from 'react-i18next';
import Logo from '../../components/assets/Logo.png';

import * as S from './style';

const LandingContent = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <S.PageHead showBGImage>
        <S.HeaderContent>
          <S.LogoContainer to={navRoutes.GENERAL.HOME}>
            <img src={Logo} alt="logo" />
          </S.LogoContainer>
          <S.HeaderText>
            <S.pageTitle ta="center" weight="bold" color="white">
              <Trans i18nKey="heading.costOfLivingHelper">
                Cost of Living Helper
              </Trans>
            </S.pageTitle>
          </S.HeaderText>
        </S.HeaderContent>
      </S.PageHead>
      <S.Section mt="8" mtM="5">
        <S.StyledText mb="8" mbM="6">
          <Trans i18nKey="section.worriedAbout.description">
            If you are worried about money there is a lot of help out there.
            Knowing where to start can be tricky, but in this tool you will find
            advice and handy tips about what you can do. You can also bookmark
            actions as you look through.
          </Trans>
        </S.StyledText>
        <T.H2 color="black" mb="4">
          <Trans i18nKey="section.worriedAbout.title">
            I’m worried about...
          </Trans>
        </T.H2>
      </S.Section>
    </>
  );
};

export default LandingContent;
