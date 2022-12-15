import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';
import * as CS from '../style';
import { Input as AntdInput } from 'antd';
import theme from '../../../theme';

const InputCommonStyle = ({ theme, error, disabled }) => `
width: 100%;
padding: ${theme.spacings[3]};
line-height: 24px;
height: 45px;
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
    font-size: 1rem !important;
    line-height: 24px !important;
  }

  .ant-input {
    color: ${theme.colors.neutralDark};
    font-size: 1rem !important;
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
  margin-inline-start: ${({ theme }) => theme.spacings[2]};
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px 0 10px ${({ theme }) => theme.spacings[2]};
`;
