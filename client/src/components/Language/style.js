import styled from '@emotion/styled';
import theme from '../../theme';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  background-color: ${theme.colors.white};
  position: ${({ hide }) => (hide ? 'relative' : 'absolute')};
  min-height: ${({ hide }) =>
    hide ? `${theme.constants.translationBar.desktop.height}` : '100%'};

  ${({ theme }) => theme.media.tablet} {
    min-height: ${({ hide }) =>
      hide ? `${theme.constants.translationBar.tablet.height}` : '100%'};
  }
`;
