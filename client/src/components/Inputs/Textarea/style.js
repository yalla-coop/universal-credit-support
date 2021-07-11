import styled from '@emotion/styled';
import { Input } from 'antd';

import setMargin from '../../../helpers/set-margin';
import * as CS from '../style';

const { TextArea: AntdTextArea } = Input;

export const TextArea = styled(AntdTextArea)`
  ${setMargin};
  ${CS.placeholderStyle};
  border: ${({ theme }) => theme.borders.inputs};
  border-color: ${({ theme, error }) =>
    error ? theme.colors.error : theme.colors.gray5};
  border-radius: ${({ theme }) => theme.borders.radius};
  width: 100%;
  padding: ${({ theme }) => theme.spacings[3]};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray9};
  font-size: 16px;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  background: ${({ theme }) => theme.colors.gray2};

  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;
