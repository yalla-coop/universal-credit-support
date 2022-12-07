import { useTranslation } from 'react-i18next';
import { Typography as T } from '../../../components';
import Logo from '../../../components/assets/Logo.png';
import { navRoutes, common } from '../../../constants';
import { usePublicOrg } from '../../../context/public-org';

import * as S from './style';

const LandingContent = () => {
  const { t } = useTranslation();
  const { publicOrg } = usePublicOrg();

  return (
    <>
      <S.PageHead showBGImage={!!publicOrg?.logoUrl}>
        <S.HeaderContent>
          <S.LogoContainer to={navRoutes.PUBLIC_ORG.HOME}>
            <img src={publicOrg?.logoUrl || Logo} alt="logo" />
          </S.LogoContainer>
          <S.HeaderText>
            <S.pageTitle ta="center" weight="bold">
              {t(
                'common.heading.costOfLivingHelper',
                common.heading.costOfLivingHelper
              )}
            </S.pageTitle>
          </S.HeaderText>
        </S.HeaderContent>
      </S.PageHead>
      <S.Section mt="8" mtM="5">
        <S.StyledText mb="8" mbM="6">
          {t(
            'common.section.worriedAbout.description',
            common.section.worriedAbout.description
          )}
        </S.StyledText>
        <T.H2 mb="4">
          {t(
            'common.section.worriedAbout.title',
            common.section.worriedAbout.title
          )}
        </T.H2>
      </S.Section>
    </>
  );
};

export default LandingContent;
