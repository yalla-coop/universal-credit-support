import styled from '@emotion/styled';
import { Link as RLink } from 'react-router-dom';
import setMargin from '../../helpers/set-margin';

export const Container = styled.div`
  overflow: hidden;
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

export const InnerContainer = styled.div`
  max-width: 700px;
`;

export const SectionHeader = styled.div`
  ${setMargin};
  display: flex;
  align-items: center;
  width: 100%;
`;
