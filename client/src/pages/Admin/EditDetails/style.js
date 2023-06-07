import styled from '@emotion/styled';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.neutralMid};
  margin-bottom: ${({ theme }) => theme.spacings[6]};
`;
