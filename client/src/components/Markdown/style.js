import styled from '@emotion/styled';

export const Wrapper = styled.div`
  font-size: 1rem;
  font-family: ${({ theme }) =>
    theme.layoutFontFamily || "'new-hero', sans-serif"};
  & ul {
    margin-inline-start: 20px;
    color: ${({ theme, color }) => theme.colors[color]};
  }
  & div {
    color: ${({ theme, color }) => theme.colors[color]};
    font-size: 1rem !important;
    line-height: 24px !important;
    & p {
      color: ${({ theme, color }) => theme.colors[color]};
    }
  }
`;

export const Strong = styled.strong`
  margin-inline-end: ${({ theme }) => theme.spacings[1]};
  color: ${({ theme, color }) =>
    theme.colors[color] || theme.colors.neutralDark};
`;
