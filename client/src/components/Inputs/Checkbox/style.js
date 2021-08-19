import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';

export const Field = styled.div`
  ${setMargin};
  width: ${({ w }) => w || '100%'};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

  .ant-checkbox-inner {
    background-color: ${({ theme }) =>
      `${theme.colors.secondaryLight} !important`};
    border-color: ${({ theme }) => `${theme.colors.secondaryMain} !important`};
    border-radius: 6px;
    border-width: 2px;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${({ theme }) => `${theme.colors.white} !important`};
    border-color: ${({ theme }) => `${theme.colors.secondaryMain} !important`};
    border-radius: 6px;
    border-width: 2px;
  }

  .ant-checkbox-checked .ant-checkbox-inner:after {
    border-color: ${({ theme }) => `${theme.colors.secondaryMain} !important`};
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
    width: 24px;
    height: 24px;
  }

  .ant-checkbox-input {
    width: 16px;
    height: 16px;
  }

  .ant-checkbox {
    font-size: 32px;
  }

  .ant-checkbox-inner::after {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8px;
    height: 14px;
    margin-top: -1px;
    border-width: 3px;
  }

  .ant-checkbox-wrapper {
    display: flex;
    align-items: center;
  }
`;
