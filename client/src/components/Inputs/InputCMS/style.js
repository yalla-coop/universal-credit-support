import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';

export const Section = styled.section`
  ${setMargin};
  padding: ${({ theme: { spacings } }) => spacings[4]};
  border: ${({ theme: { borders } }) => borders.section};
  border-radius: ${({ theme: { borders } }) => borders.radius};
  width: 100%;
`;
