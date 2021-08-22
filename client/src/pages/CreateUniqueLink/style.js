import styled from '@emotion/styled';

export const Container = styled.div``;

export const LinkWrapper = styled.a`
  background-color: ${({ theme }) => theme.colors.neutralSurface};
  display: flex;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacings[3]};
  margin-bottom: ${({ theme }) => theme.spacings[7]};
  padding-left: ${({ theme }) => theme.spacings[5]};
  width: 100%;
`;
