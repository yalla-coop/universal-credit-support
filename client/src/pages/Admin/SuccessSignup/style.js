import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';

export const Wrapper = styled.div`
  ${setMargin};
  max-width: 407px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const BlockSpan = styled.span`
  display: block;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  margin-top: ${({ theme }) => theme.spacings[5]};
  flex: 1;
  display: flex;
  align-items: flex-start;
  ${({ theme }) => theme.media.mobile} {
    align-items: flex-end;
    max-width: 100%;
  }
`;
