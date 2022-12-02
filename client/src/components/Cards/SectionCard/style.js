import styled from '@emotion/styled';
import setMargin from './../../../helpers/set-margin';
import { Link as RouterLink } from 'react-router-dom';

export const Wrapper = styled(RouterLink)`
  ${setMargin};
  width: 100%;
  display: flex;
  max-width: 300px;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 1px 2px -1px rgba(16, 24, 40, 0.1);
  filter: drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1));
  align-self: flex-start;
  ${({ theme }) => theme.media.mobile} {
    max-width: 100%;
  }
`;

export const CardHead = styled.div`
  width: 100%;
  height: 206px;
  background: ${({ theme: { colors }, bg }) => {
    return bg ? colors[bg] : colors.neutralSurface;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CardFooter = styled.div`
  width: 100%;
  padding: 16px 24px;
  background: ${({ theme: { colors }, bg }) =>
    bg ? colors[bg] : colors.neutralSurface};
  display: flex;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  align-items: flex-start;
`;
