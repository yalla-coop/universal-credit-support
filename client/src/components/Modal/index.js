import React from 'react';

import Button from '../Button';

import * as S from './style';
import * as T from '../Typography';

const maskStyle = { backgroundColor: 'white', opacity: '0.9' };

const Modal = ({
  visible,
  setIsModalVisible,
  children,
  parentFunc,
  closeOnOK = true,
  useBlankModal,
  title = 'Are you sure?',
  description,
  btnText = 'Confirm',
}) => {
  const handleOk = (action) => {
    parentFunc(action);
    closeOnOK && setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (useBlankModal)
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

  return (
    <>
      <S.Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        // footer={[]}
        maskStyle={maskStyle}
        title={title}
      >
        <T.P color="neutralDark" mb="6">
          {description}
        </T.P>
        <Button handleClick={() => handleOk()} text={btnText} mb="3" />
      </S.Modal>
    </>
  );
};

export default Modal;
