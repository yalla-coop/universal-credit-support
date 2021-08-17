import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

export const CardWrapper = styled.div`
  ${setMargin};
  width: 100%;
  display: flex;
  border-radius: ${({ theme }) => theme.borders.radius};
  background-color: ${({ theme }) => theme.colors.neutralSurface};
  padding: ${({ theme }) => theme.spacings[4]};
`;

export const IconWrapper = styled.div`
  min-width: 24px;
`;

export const Content = styled.div``;
