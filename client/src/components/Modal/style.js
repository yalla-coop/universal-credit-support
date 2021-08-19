import styled from '@emotion/styled';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  min-height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.modalBackground};
`;

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacings[6]};
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
`;

export const SideDiv = styled.div`
  background: ${({ theme }) => theme.gradients.secondary};
  width: 50%;
  max-width: 260px;
  align-self: normal;
`;
