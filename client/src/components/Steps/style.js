import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';

import setMargin from '../../helpers/set-margin';

const bounce = (start) => keyframes`
  0% {
    background-color: currentColor;
  }

  100% {
    background-color: ${start};
  }
`;

export const Wrapper = styled.div`
  ${setMargin};
  width: 100%;
  background: ${({ theme, bgColor }) => theme.colors[bgColor]};
  display: flex;
  justify-content: center;
`;

export const OptionalContainer = styled.div`
  ${setMargin};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 580px;
  padding: ${({ theme: { spacings } }) => `0 ${spacings[7]}`};

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme: { spacings } }) => spacings[6]};
    border-radius: 0px 8px 8px 0;
    max-width: 90vw;
    margin: 0;
  }
`;

export const StyledLink = styled(Link)`
  color: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  padding: ${({ direction }) =>
    direction === 'right' ? '36px 188px 36px 36px' : '36px 36px 36px 188px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 152px;
  border: none;
  position: relative;
  max-width: 600px;
  ${({ theme }) => theme.media.tablet} {
    padding: ${({ direction }) =>
      direction === 'right' ? '24px 188px 24px 24px' : '24px 24px 24px 188px'};
  }
  ${({ theme }) => theme.media.mobile} {
    max-width: auto;
    padding: ${({ direction }) =>
      direction === 'right' ? '18px 180px 18px 18px' : '18px 18px 18px 180px'};
  }
`;

export const Circle = styled.div`
  width: 188px;
  height: 188px;
  padding: 0 20px;
  background: ${({ theme, circleColor }) => theme.colors[circleColor]};
  position: absolute;
  border-radius: 50%;
  border: ${({ theme, borderColor }) =>
    `5px solid ${theme.colors[borderColor]}`};
  right: ${({ direction }) => (direction === 'right' ? '-5%' : null)};
  left: ${({ direction }) => (direction === 'left' ? '-5%' : null)};
  top: -18px;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${(props) => props.isJustCompletedOne && bounce(props.circleColor)}
    3s ease;
`;

export const Strong = styled.strong`
  font-weight: bold !important;
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
`;
