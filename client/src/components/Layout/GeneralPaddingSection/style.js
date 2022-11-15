import styled from '@emotion/styled';

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  ${({ theme }) => theme.media.mobile} {
    padding: 24px 10vw;
  }

  padding: 48px 11.3vw 80px;
`;
