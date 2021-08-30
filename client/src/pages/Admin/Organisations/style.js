import styled from '@emotion/styled';

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: red;
  display: none;
  margin-bottom: ${({ theme }) => theme.spacings[6]};
  margin-top: ${({ theme }) => theme.spacings[3]};
  background-color: ${({ theme }) => theme.colors.neutralDark};
  ${({ theme }) => theme.media.tablet} {
    display: block;
  }
`;
