import styled from '@emotion/styled';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  z-index: 10;
  background: ${({ theme }) => theme.colors.modalBackground};
`;

export const Container = styled.div`
  min-width: 730px;
  min-height: 532px;
  padding: ${({ theme }) => theme.spacings[6]};
  background: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.media.tablet} {
    min-height: 100vh;
    min-width: 100vw;
  }
`;
