import styled from '@emotion/styled';
import theme from '../../theme';

export const ButtonWrapper = styled('div')`
  display: grid;
  width: 100%;
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
  }
`;

export const Button = styled('button')`
  display: flex;
  flex-wrap: wrap;
  outline: none;
  border: none;
  border-radius: 8px;
  min-width: 100%;
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
