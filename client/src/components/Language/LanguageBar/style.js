import styled from '@emotion/styled';
import theme from '../../../theme';

const commonStyle = `
  display: flex;
  width: 100%;
  align-items: center;
  z-index: 2;
  background-color: ${theme.colors.neutralSurface};
`;

const desktop = `
  height: ${theme.constants.translationBar.desktop.height};
  padding: ${theme.constants.translationBar.desktop.padding};
  justify-content: space-between;
`;

const tablet = `
  height: ${theme.constants.translationBar.tablet.height};
  padding: ${theme.constants.translationBar.tablet.padding};
`;

export const DesktopWrapper = styled('div')`
  ${commonStyle};
  ${desktop};
`;

export const TabletWrapperLTR = styled('div')`
  ${commonStyle};
  ${tablet};
  justify-content: ${({ showBack }) => (showBack ? 'space-between' : 'end')};
`;

export const TabletWrapperRTL = styled('div')`
  ${commonStyle};
  ${tablet};
  justify-content: ${({ showBack }) => (showBack ? 'space-between' : 'start')};
`;

export const ButtonWrapper = styled('div')`
  display: flex;
  gap: 15px;
`;
