import styled from '@emotion/styled';
import { Link as RLink } from 'react-router-dom';

export const Container = styled.div`
  flex: 1;
  height: 95vh;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacings[2]};
  padding-left: ${({ theme }) => theme.spacings[4]};
  ${({ theme }) => theme.media.tablet} {
    padding: 0;
    padding-left: ${({ theme }) => theme.spacings[2]};
  }
`;

export const PageHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacings[5]};
`;

export const Link = styled(RLink)`
  color: ${({ theme }) => theme.colors.neutralPrimary};
  display: flex;
`;
