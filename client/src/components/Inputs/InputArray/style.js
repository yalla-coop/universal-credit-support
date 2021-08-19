import styled from '@emotion/styled';
import * as CS from '../style';
import setMargin from '../../../helpers/set-margin';

export const Container = styled.div`
  ${setMargin};
`;

export const InputField = styled.div`
  ${setMargin};
  display: flex;
  align-items: center;
  width: 100%;
`;

const InputCommonStyle = ({ theme, error, disabled }) => `
width: 100%;
padding: ${theme.spacings[3]};
line-height: 24px;

cursor: ${disabled && 'not-allowed'};

transition: all 0.3s ease;

:focus {
  outline: none;
  border-color: ${theme.colors.secondaryMain};
}

:hover {
  outline: none;
  border-color: ${theme.colors.secondaryMain};
}
`;

export const Input = styled.input`
  ${setMargin};
  ${CS.placeholderStyle};
  ${CS.commonBorderStyle};
  ${InputCommonStyle};
`;

export const Button = styled.button`
  ${setMargin};
  outline: none;
  border: none;
  background: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
