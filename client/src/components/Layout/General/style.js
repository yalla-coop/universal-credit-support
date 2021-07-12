import styled from '@emotion/styled';
import { Link as RLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  background: white;
  padding: ${({ theme: { spacings } }) => `${spacings[6]} ${spacings[10]}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: ${({ theme: { spacings } }) => spacings[1]};
    background: ${({ theme: { gradients } }) => '#F7FBFF'};
  }
  ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme: { spacings } }) =>
      `40px ${spacings[7]} 40px ${spacings[9]}`};
  }
  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme: { spacings } }) =>
      `${spacings[6]} 37px ${spacings[4]} 38px`};
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Content = styled.main`
  width: 100%;
  max-width: ${({ maxWidth, theme: { maxWidths } }) =>
    maxWidth || maxWidths.desktop};
  padding: ${({ theme: { spacings } }) => `${spacings[8]} ${spacings[10]}`};
  ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme: { spacings } }) => `${spacings[7]} ${spacings[9]}`};
  }
  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme: { spacings } }) =>
      `${spacings[6]} 37px ${spacings[8]} 38px`};
  }
`;

export const Link = styled(RLink)`
  color: ${({ theme }) => theme.colors.neutralPrimary};
  display: flex;
`;
