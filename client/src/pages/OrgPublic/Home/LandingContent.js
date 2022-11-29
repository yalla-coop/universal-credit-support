import { navRoutes } from '../../../constants';
import { Typography as T } from '../../../components';

import Logo from '../../../components/assets/Logo.png';

import * as S from './style';

const LandingContent = () => {
  return (
    <>
      <S.PageHead showBGImage>
        <S.HeaderContent>
          <S.LogoContainer to={navRoutes.PUBLIC_ORG.HOME}>
            <img src={Logo} alt="logo" />
          </S.LogoContainer>
          <S.HeaderText>
            <S.pageTitle ta="center" weight="bold" color="primaryTextMain">
              Cost of Living Helper
            </S.pageTitle>
          </S.HeaderText>
        </S.HeaderContent>
      </S.PageHead>
      <S.Section mt="8" mtM="5">
        <S.StyledText mb="8" mbM="6">
          If you are worried about money there is a lot of help out there.
          Knowing where to start can be tricky, but in this tool you will find
          advice and handy tips about what you can do. You can also bookmark
          actions as you look through.
        </S.StyledText>
        <T.H2 mb="4">I’m worried about...</T.H2>
      </S.Section>
    </>
  );
};

export default LandingContent;
