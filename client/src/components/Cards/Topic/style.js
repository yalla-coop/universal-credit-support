import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';

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
  padding: ${({ theme: { spacings } }) =>
    `${spacings[4]}  ${spacings[5]}  ${spacings[5]}  ${spacings[5]}}`};
  padding-bottom: ${({ theme: { spacings } }) => spacings[4]};
`;

export const MarkButton = styled.button`
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
`;

export const IconWrapper = styled.div`
  align-self: stretch;
  display: flex;
  align-items: flex-start;
`;
