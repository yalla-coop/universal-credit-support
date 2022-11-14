import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';
import * as T from '../../components/Typography';
import backgroundLogo from '../../components/assets/BackgroundHydeLogo.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageHead = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.gradients.primary};
  background-color: ${({ theme }) => theme.gradients.primaryMain};
  background-image:${({ showBGImage }) =>
    showBGImage && `url(${backgroundLogo})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: ${({ theme: { spacings } }) => spacings[7]};
  padding-bottom: ${({ theme: { spacings } }) => spacings[8]};

  ${({ theme }) => theme.media.mobile} {
    padding-top: ${({ theme: { spacings } }) => spacings[6]};
    padding-bottom: ${({ theme: { spacings } }) => spacings[7]}};
    display: flex;
    justify-content: flex-start;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 580px;
  width: 100%;
  margin: 0 auto;
  ${({ theme }) => theme.media.mobile} {
    max-width: 90vw;
    margin: 0;
  }
`;

export const HeaderText = styled.div`
  background: ${({ theme: { colors } }) => `hsla(219, 25%, 14%, 0.8)`};
  border-radius: 8px;
  width: 100%;
  padding: ${({ theme: { spacings } }) => `${spacings[8]} ${spacings[7]}`};

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme: { spacings } }) => spacings[6]};
    border-radius: 0px 8px 8px 0;
  }
`;

export const Section = styled.section`
  ${setMargin}
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1012px;
  width: 100%;
  padding-left: 37.5px;
  padding-right: 37.5px;
  h2 {
    align-self: center;
  }
  ${({ theme }) => theme.media.mobile} {
    h2 {
      align-self: flex-start;
    }
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;
  ${({ theme }) => theme.media.tablet} {
    justify-content: center;
  }
  ${({ theme }) => theme.media.mobile} {
    justify-content: flex-start;
  }
`;
export const StyledText = styled(T.P)`
  max-width: 585px;
  color: ${({ theme: { colors } }) => colors.neutralDark};
`;

export const LogoContainer = styled(Link)`
  width: 72px;
  height: 30px;
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacings[7]};

  ${({ theme }) => theme.media.mobile} {
    margin-left: 37px;
    margin-bottom: ${({ theme }) => theme.spacings[5]};
  }
`;

export const FullSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 56px;
  padding: ${({ theme }) => `${theme.spacings[7]}`};
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.neutralSurface};
  ${({ theme }) => theme.media.mobile} {
    margin-top: 24px;
    padding: ${({ theme }) => `${theme.spacings[5]} 37.5px`};
  }
`;

export const NeedHelpWrapper = styled.div`
  max-width: 583px;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  max-width: 300px;
  padding-left: 0;
  padding-right: 0;
  ${({ theme }) => theme.media.mobile} {
    max-width: 100%;
    padding-left: 37.5px;
    padding-right: 37.5px;
    #buttons_text {
      max-width: 200px;
    }
  }
`;

export const pageTitle = styled(T.H1)`
  font-size: 40px !important;
  line-height: 55.88px !important;
  ${({ theme }) => theme.media.mobile} {
    font-size: 22px !important;
    line-height: 32px !important;
  }
`;
export const ReadMoreLink = styled(T.Link)`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  width: 100%;
`;
