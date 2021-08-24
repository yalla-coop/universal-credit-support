import styled from '@emotion/styled';
import setMargin from './../../../helpers/set-margin';

export const Section = styled.section`
  ${setMargin};
  width: 100%;
  border: ${({ theme: { borders } }) => borders.card};
  border-radius: ${({ theme: { borders } }) => borders.radius};
`;

export const TopSection = styled.div`
  padding: ${({ theme: { spacings } }) => spacings[5]};
  padding-bottom: 0;
`;

export const ExtraDetails = styled.div`
  background: ${({ theme: { colors } }) => colors.neutralSurface};
  padding: ${({ theme: { spacings } }) => spacings[5]};
  padding-bottom: ${({ theme: { spacings } }) => spacings[4]};
`;
