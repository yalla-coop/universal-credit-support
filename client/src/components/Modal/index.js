import { createPortal } from 'react-dom';

import * as S from './style';

function Modal({ children, style, closeModal = () => {}, layout }) {
  return createPortal(
    <S.Background style={style} onClick={closeModal}>
      {layout === 'step' && <S.SideDiv />}
      <S.Container>{children}</S.Container>
    </S.Background>,
    document.getElementById('modal_root')
  );
}

export default Modal;
