import styled from '@emotion/styled';
import { Link as RLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  background: transparent;
  padding: ${({ theme: { spacings } }) =>
    `${spacings[7]} 0px ${spacings[3]} 0`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  max-width: 580px;

  ${({ theme }) => theme.media.tablet} {
    padding: ${({ theme: { spacings } }) =>
      `${spacings[7]} ${spacings[7]} 40px 0`};
  }
  ${({ theme }) => theme.media.mobile} {
    max-width: auto;
    padding: ${({ theme: { spacings } }) =>
      `${spacings[6]} 37px ${spacings[4]} 24px`};
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.gradients.primary};
  ${({ theme }) => theme.media.mobile} {
    justify-content: flex-start;
  }
`;

export const Content = styled.main`
  width: 100%;
  overflow: hidden;
  padding-bottom: ${({ theme: { spacings } }) => spacings[8]};
  ${({ theme }) => theme.media.tablet} {
    padding-bottom: ${({ theme: { spacings } }) => spacings[7]};
  }
  ${({ theme }) => theme.media.mobile} {
    padding-bottom: ${({ theme: { spacings } }) => spacings[8]};
  }
`;

export const Link = styled(RLink)`
  color: ${({ theme }) => theme.colors.neutralMain};
  display: flex;
`;

export const LangButton = styled.button`
  border: none;
  background: transparent;
  align-self: baseline;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Container = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${({ theme, bgColor }) => bgColor && theme.colors[bgColor]};
`;
