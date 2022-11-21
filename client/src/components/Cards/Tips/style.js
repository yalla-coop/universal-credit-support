import styled from '@emotion/styled';
import setMargin from './../../../helpers/set-margin';

export const Tip = styled.div`
  ${setMargin};
  background: ${({ theme, bgColor }) => theme.colors[bgColor] || bgColor};
  border-radius: ${({ theme: { borders } }) => borders.radiusLarge};
  display: flex;
  align-items: flex-start;
  padding: ${({ theme: { spacings } }) => `${spacings[5]} ${spacings[4]}`};
  background-image: ${({ theme: { colors }, borderColor }) => {
    return `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='${
      colors[borderColor] || borderColor
    }' stroke-width='4' stroke-dasharray='10%2c 15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`;
  }};
`;
