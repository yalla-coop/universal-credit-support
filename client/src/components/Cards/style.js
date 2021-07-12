import styled from '@emotion/styled';
import setMargin from './../../helpers/set-margin';

export const Wrapper = styled.div`
  ${setMargin};
  width: 100%;
  background: ${({ theme, bgColor }) => theme.colors[bgColor]};
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  padding: ${({ direction }) =>
    direction === 'right' ? '36px 188px 36px 36px' : '36px 36px 36px 188px'};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 152px;
  border: none;
  position: relative;
  max-width: 600px;
`;

export const Circle = styled.div`
  width: 188px;
  height: 188px;
  background: ${({ theme, circleColor }) => theme.colors[circleColor]};
  position: absolute;
  border-radius: 50%;
  border: ${({ theme, borderColor }) =>
    `5px solid ${theme.colors[borderColor]}`};
  right: ${({ direction }) => (direction === 'right' ? '-5%' : null)};
  left: ${({ direction }) => (direction === 'left' ? '-5%' : null)};
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
