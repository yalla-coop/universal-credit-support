import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

export const Wrapper = styled.div`
  ${setMargin};
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacings[4]};
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  padding-top: 4px;
`;
