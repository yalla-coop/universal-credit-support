import styled from '@emotion/styled';
import setMargin from './../../../helpers/set-margin';

export const Section = styled.section`
  ${setMargin};
  border: ${({ theme: { borders } }) => borders.card};
  border-radius: ${({ theme: { borders } }) => borders.radius};
`;

export const ExtraDetails = styled.div`
  background: ${({ theme: { colors } }) => colors.neutralSurface};
`;
