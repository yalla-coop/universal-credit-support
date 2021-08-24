import styled from '@emotion/styled';
import { Modal as AntModal } from 'antd';
import theme from '../../theme';

export const Head = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondaryMain};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 62px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 24px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
`;

export const Modal = styled(AntModal)`
  position: relative;
  .ant-modal-footer,
  .ant-modal-header,
  .ant-modal-close {
    display: none;
  }

  max-width: 350px;

  .ant-modal-content {
    position: relative;
    border: none;
    border-radius: 10px;
    padding-top: 62px;
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
