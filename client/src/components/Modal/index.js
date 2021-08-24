import React from 'react';

import Button from '../Button';

import * as S from './style';
import * as T from '../Typography';

import Icon from '../Icon';

const maskStyle = { backgroundColor: 'white', opacity: '0.9' };

const Modal = ({
  visible,
  setIsModalVisible,
  children,
  type,
  parentFunc,
  closeOnOK = true,
  loading,
  error,
}) => {
  const handleOk = (action) => {
    parentFunc(action);
    closeOnOK && setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  switch (type) {
    case 'updateSuccess':
      return (
        <>
          <S.Modal
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[]}
            maskStyle={maskStyle}
          >
            <S.Head>
              <T.P color="white">Updated</T.P>
              <Icon
                icon="close"
                color="white"
                style={{ cursor: 'pointer' }}
                onClick={handleCancel}
              />
            </S.Head>

            <T.P color="neutralDark" mb="5">
              Changes successfully updated
            </T.P>
            <Button handleClick={handleCancel} text="Okay" />
          </S.Modal>
        </>
      );

    default:
      return (
        <>
          <S.Modal
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[]}
            maskStyle={maskStyle}
          >
            {children}
          </S.Modal>
        </>
      );
  }
};

export default Modal;
