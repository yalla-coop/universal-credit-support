import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';

export const Field = styled.div`
  ${setMargin};
  width: ${({ w }) => w || '100%'};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${({ theme, color }) =>
      color ? theme.colors[color] : theme.colors.black};
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${({ theme, color }) =>
      color ? theme.colors[color] : theme.colors.black};
  }

  .ant-checkbox-inner {
    background: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme, error }) =>
      error ? theme.colors.error : theme.colors.gray5};
    width: 16px;
    height: 16px;
  }

  .ant-checkbox-input {
    width: 16px;
    height: 16px;
  }

  .ant-checkbox {
    font-size: 16px;
  }

  .ant-checkbox-inner::after {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ant-checkbox-wrapper {
    display: flex;
    align-items: flex-start;
  }
`;
