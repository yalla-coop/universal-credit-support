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
export const SideDiv = styled.div`
  background: ${({ theme }) => theme.gradients.secondary};
  width: 50%;
  max-width: 260px;
  align-self: normal;
`;

export const ContentHalf = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme: { spacings: s } }) =>
    `${s[9]} ${s[0]} ${s[11]} ${s[11]}`};
  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme: { spacings } }) =>
      `${spacings[6]} 37px ${spacings[7]} 38px`};
  }
`;

export const Link = styled(RLink)`
  color: ${({ theme }) => theme.colors.neutralMain};
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacings[8]};
  ${({ theme }) => theme.media.mobile} {
    display: ${({ showColorOnMobile }) =>
      showColorOnMobile ? 'none' : 'flex'};
  }
`;
