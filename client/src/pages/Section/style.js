import styled from '@emotion/styled';
import { Link as RLink } from 'react-router-dom';
import setMargin from '../../helpers/set-margin';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  max-width: 898px;
  display: flex;
  justify-content: space-between;
`;

export const Topics = styled.div`
  width: 60%;
`;

export const HelpSection = styled.div`
  width: 33%;
`;
