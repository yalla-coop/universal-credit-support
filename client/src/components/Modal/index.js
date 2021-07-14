import { createPortal } from 'react-dom';

import * as S from './style';

function Modal({ children, style, closeModal = () => {} }) {
  return createPortal(
    <S.Background style={style} onClick={closeModal}>
      <S.Container>{children}</S.Container>
    </S.Background>,
    document.getElementById('modal_root')
  );
}

export default Modal;
