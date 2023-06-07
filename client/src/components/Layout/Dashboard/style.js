import styled from '@emotion/styled';
import { Link as RLink } from 'react-router-dom';

export const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: ${({ side }) => (side === 'right' ? 'row-reverse' : 'row')};
  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }
`;

export const MenuWrapper = styled.div`
  flex: 1;
  display: flex;
  max-width: 260px;
  background: ${({ theme }) => theme.colors.neutralSurface};

  ${({ theme }) => theme.media.mobile} {
    display: ${({ showColorOnMobile }) =>
      showColorOnMobile ? 'flex' : 'none'};
  }
`;

export const ContentHalf = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme: { spacings: s } }) => s[10]};
  ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme: { spacings } }) =>
      `${spacings[6]} 37px ${spacings[7]} 38px`};
  }
`;

export const MaxWidth = styled.div`
  width: 100%;
  max-width: 935px;
  display: flex;
  flex-direction: column;
`;

export const Link = styled(RLink)`
  color: ${({ theme }) => theme.colors.neutralMain};
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacings[8]};
  ${({ theme }) => theme.media.mobile} {
    display: ${({ showColorOnMobile }) =>
      showColorOnMobile ? 'none' : 'flex'};
    margin-bottom: ${({ theme }) => theme.spacings[3]};
  }
`;
