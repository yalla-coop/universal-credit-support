import styled from '@emotion/styled';
import theme from '../../theme';
import setMargin from '../../helpers/set-margin';

export const Wrapper = styled('div')`
  ${setMargin}
  background-color: ${theme.colors.white};
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  margin-top: 48px;
  padding: ${theme.constants.translationBar.desktop.padding};

  ${({ theme }) => theme.media.desktop} {
    padding: ${theme.constants.translationBar.desktop.padding};
  }

  ${({ theme }) => theme.media.mobile} {
    padding: ${theme.constants.translationBar.mobile.padding};
  }
`;
export const ButtonWrapper = styled('div')`
  display: grid;
  max-width: 908px;
  margin-top: 8px;
  grid-gap: 4px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
    padding: ${theme.constants.translationBar.mobile.padding};
  }
`;

export const Button = styled('button')`
  display: flex;
  flex-wrap: wrap;
  outline: none;
  border: none;
  border-radius: 8px;
  width: 300px;
  padding: 16px 24px;
  align-items: center;
  background-color: ${theme.colors.neutralSurface};
  justify-content: ${({ jc }) => jc || 'flex-start'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${theme.colors.neutralLight};
  }
`;
