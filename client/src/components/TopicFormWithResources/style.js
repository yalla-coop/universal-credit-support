import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';
import * as T from '../Typography';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacings[7]};
`;

export const Section = styled.div`
  ${setMargin};
  width: 100%;

  background: linear-gradient(white, white) padding-box,
    ${({ theme }) => theme.gradients.primary} border-box;
  border-radius: ${({ theme: { borders } }) => borders.radius};
  border: 3px solid transparent;
`;

export const TopSection = styled.div`
  padding: ${({ theme: { spacings } }) => spacings[5]};
  padding-bottom: 0;
`;

export const TipInputWrapper = styled.div`
  display: flex;
  margin-top: ${({ theme: { spacings } }) => spacings[4]};
`;

export const CloseTipButton = styled.button`
  outline: none;
  border: none;
  box-shadow: none;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 18px;
  margin-top: 24px;
`;

export const CollapseContent = styled.div`
  padding-left: ${({ theme: { spacings } }) => spacings[5]};
  padding-right: ${({ theme: { spacings } }) => spacings[5]};
  padding-bottom: ${({ theme: { spacings } }) => spacings[5]};
  margin-top: ${({ theme }) => theme.spacings[4]};
`;

export const ActionText = styled(T.P)`
  cursor: pointer;
`;
