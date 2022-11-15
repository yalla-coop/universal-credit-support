import styled from '@emotion/styled';
import * as T from '../../components/Typography';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled(T.Link)`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  width: 100%;
`;
