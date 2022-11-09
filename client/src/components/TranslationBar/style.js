import styled from '@emotion/styled';
import theme from '../../theme';

const commonStyle = `
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${theme.colors.neutralSurface};
`;

const desktop = `
  height: ${theme.constants.translationBar.desktop.height};
  padding: ${theme.constants.translationBar.desktop.padding};
  justify-content: space-between;
`;

const mobile = `
  height: ${theme.constants.translationBar.mobile.height};
  padding: ${theme.constants.translationBar.mobile.padding};
`;

export const DesktopWrapper = styled('div')`
  ${commonStyle};
  ${desktop};
`;

export const MobileWrapperLTR = styled('div')`
  ${commonStyle};
  ${mobile};
  justify-content: ${({ showBack }) => (showBack ? 'space-between' : 'end')};
`;

export const MobileWrapperRTL = styled('div')`
  ${commonStyle};
  ${mobile};
  justify-content: ${({ showBack }) => (showBack ? 'space-between' : 'start')};
`;

export const ButtonWrapper = styled('div')`
  display: flex;
  gap: 15px;
`;
