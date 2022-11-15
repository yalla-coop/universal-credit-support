import styled from '@emotion/styled';

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex: 1;
  ${({ theme }) => theme.media.mobile} {
    padding: 24px 10vw;
  }
  flex-direction: column;

  padding: 48px 11.3vw 80px;
`;
