import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

export const Wrapper = styled.div`
  ${setMargin};
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacings[3]};
`;

export const LinkWrapper = styled.a`
  background: ${({ theme }) => theme.colors.neutralSurface};
  margin-bottom: ${({ theme }) => theme.spacings[2]};
  border-radius: 12px;
  padding: 12px 24px;
  width: 100%;
  display: flex;
`;
