import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacings[3]};
`;
