import styled from '@emotion/styled';
import { Modal as AntModal } from 'antd';
import theme from '../../theme';

export const Modal = styled(AntModal)`
  .ant-modal-footer {
    display: none;
  }

  .ant-modal-header {
    background: ${({ theme }) => theme.colors.secondaryMain};
    border-radius: 12px 12px 0 0;
    padding: ${({ theme }) => `${theme.spacings[5]} inherit`};
    min-height: 62px;
  }

  .ant-modal-title {
    color: ${({ theme }) => theme.colors.white};
    font-family: font-family: 'hero-new-hairline', sans-serif;
    font-weight: 500;
    padding-top: 5px;
  }

  .ant-modal-close {
    color: ${({ theme }) => theme.colors.white};
    svg { 
      margin-top: 22px;
      width: 20px;
      height: 20px;
    }
  }

  max-width: 420px;

  .ant-modal-content {
    position: relative;
    border: none;
    border-radius: 10px;
  }

  .ant-modal-body {
    z-index: 999;
    display: flex;
    flex-direction: column;
  }

  ${theme.media.mobile} {
    max-width: 350px;
  }

  ${theme.media.mobileXS} {
    max-width: 300px;
  }
`;
