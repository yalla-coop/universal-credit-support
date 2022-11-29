import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacings[7]};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacings[4]};
  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }
`;
