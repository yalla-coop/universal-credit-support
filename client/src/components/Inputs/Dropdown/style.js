import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';

import { Select as AntdSelect } from 'antd';

const { Option: AntdOption } = AntdSelect;

export const Field = styled.div`
  ${setMargin};
  width: ${({ w }) => w || '100%'};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

  // ANTD STYLING
  // STYLE OVERALL CONTAINER
  .ant-select {
    border-radius: ${({ theme }) => theme.borders.radius};

    width: 100%;
    height: 100%;
  }

  // STYLE INPUT CONTAINER
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: none;
    border-radius: 0;
    padding: ${({ theme }) => theme.spacings[3]};
    overflow-x: hidden;
    border: 1px solid;
    border-color: ${({ theme, error }) => {
      if (error) return theme.colors.secondaryMain;
      return theme.colors.primaryMid;
    }};
    border-radius: ${({ theme }) => theme.borders.radius};
    background: ${({ theme }) => theme.colors.white};
  }

  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 100%;
    padding: ${({ theme }) => theme.spacings[3]};
  }

  // STYLE SELECTED ITEM IN INPUT FOR MULTIPLE SELECT
  .ant-select-multiple .ant-select-selection-item {
    height: 100%;
    padding: 0.1rem 0.4rem;
    font-size: 16px;
  }

  .ant-select-show-search.ant-select:not(.ant-select-customize-input)
    .ant-select-selector
    input {
    height: 100%;
  }

  // STYLE ARROW ICON
  .ant-select-arrow,
  .ant-select-clear,
  .ant-select-selection-item-remove {
    color: ${({ theme }) => theme.colors.primaryMain};
    width: 20px;
    display: flex;
    align-items: center;

    svg {
      width: 20px;
      height: 15px;
      transition: all ease 0.5s;
      transform: ${({ open, multi, search }) =>
        open && !multi && !search && 'rotate(180deg)'};
    }
  }

  // STYLE PLACEHOLDER
  .ant-select-multiple .ant-select-selection-placeholder,
  .ant-select-selection-placeholder {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primaryMid};
    padding-left: ${({ theme }) => theme.spacings[3]};
    text-align: left;
  }

  // STYLE SELECTED ITEM IN SINGLE DROPDOWN
  .ant-select-single.ant-select-show-arrow .ant-select-selection-item {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.neutralPrimary};

    // SEEMS WEIRD BUT YOU NEED TO DO THIS TO FORCE THE WIDTH TO STAY CONTAINED
    width: 1px;
  }
`;

export const menuStyle = styled``;

export const Answer = styled.div`
  flex-direction: column;
  width: 100%;
`;

export const Option = styled(AntdOption)`
  font-size: 16px;
  font-weight: normal;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  white-space: normal;
`;
