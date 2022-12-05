import styled from '@emotion/styled';
import { setMargin } from '../../helpers';

export const Wrapper = styled.div`
  ${setMargin};
  [data-name='codeBlock'],
  [data-name='edit'],
  [data-name='live'],
  [data-name='preview'],
  [data-name='fullscreen'],
  [data-name='checked-list'],
  [data-name='ordered-list'],
  [data-name='comment'],
  [data-name='code'],
  [data-name='hr'],
  [data-name='quote'],
  [data-name='title'],
  [data-name='strikethrough'],
  [data-name='image'],
  .w-md-editor-toolbar-divider,
  .w-md-editor-bar {
    display: none;
  }

  button[data-name='italic']:first-child {
    display: none;
  }
  width: 100%;
  .wmde-markdown-var.w-md-editor.w-md-editor-show-edit {
    min-height: 82px !important;
  }
  .w-md-editor-content {
    min-height: 50px;
  }
`;

export const Label = styled.label`
  ${setMargin};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 8px;
`;

export const OptionalTag = styled.span`
  ${setMargin};
  display: inline-block;
  font-weight: 400 !important;
  color: ${({ theme }) => theme.colors.neutral80};
`;
