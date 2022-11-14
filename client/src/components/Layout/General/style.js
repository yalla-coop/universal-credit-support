import styled from '@emotion/styled';
import { Link as RLink } from 'react-router-dom';

export const Content = styled.main`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex: 1;
`;

export const Link = styled(RLink)`
  color: ${({ theme }) => theme.colors.neutralMain};
  display: flex;
`;

export const LangButton = styled.button`
  border: none;
  background: transparent;
  align-self: baseline;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Container = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
