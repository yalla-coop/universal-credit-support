import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';
import * as CS from '../style';
import { Input as AntdInput } from 'antd';

const InputCommonStyle = ({ theme, error, disabled }) => `
border: ${theme.borders.inputs};
border-color: ${error ? theme.colors.error : theme.colors.gray5};
border-radius: ${theme.borders.radius};

width: 100%;
padding: ${theme.spacings[3]};
line-height: 24px;

color: ${theme.colors.gray9};
font-size: 16px;

cursor: ${disabled && 'not-allowed'};
background: ${theme.colors.gray2};

:focus {
  outline: none;
  border-color: ${theme.colors.blue};
}
`;

export const Input = styled.input`
  ${setMargin};
  ${CS.placeholderStyle};
  ${InputCommonStyle};
`;

export const PasswordInput = styled(AntdInput.Password)`
  ${setMargin};
  ${CS.placeholderStyle};
  ${InputCommonStyle};
  input {
    background-color: inherit;
  }
`;
