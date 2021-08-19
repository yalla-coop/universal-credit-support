import styled from '@emotion/styled';
import { Link as RLink } from 'react-router-dom';

export const Container = styled.div`
  overflow: hidden;
  padding-right: ${({ theme }) => theme.spacings[9]};
  ${({ theme }) => theme.media.tablet} {
    padding: 0;
    padding-left: ${({ theme }) => theme.spacings[1]};
  }
`;

export const PageHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacings[5]};
`;

export const Link = styled(RLink)`
  color: ${({ theme }) => theme.colors.neutralMain};
  display: flex;
`;
