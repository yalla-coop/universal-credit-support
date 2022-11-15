import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';
import * as CS from '../style';
import { Input as AntdInput } from 'antd';
import theme from '../../../theme';

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

export const Input = styled(AntdInput)`
  ${setMargin};
  ${CS.placeholderStyle};
  ${CS.commonBorderStyle};
  ${InputCommonStyle};

  .ant-input::placeholder {
    color: ${theme.colors.neutralDark};
    font-size: 16px !important;
    line-height: 24px !important;
  }

  .ant-input {
    color: ${theme.colors.neutralDark};
    font-size: 16px !important;
    line-height: 24px !important;
  }
`;

export const PasswordInput = styled(AntdInput.Password)`
  ${setMargin};
  ${CS.placeholderStyle};
  ${CS.commonBorderStyle};
  ${InputCommonStyle};
  input {
    background-color: inherit;
  }
`;

export const InfoWrapper = styled.button`
  margin-bottom: ${({ theme }) => theme.spacings[2]};
  margin-left: ${({ theme }) => theme.spacings[2]};
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
`;
