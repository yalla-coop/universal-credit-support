import * as S from './style';
import DragDrop from './DragDrop';
import SingleButton from './SingleButton';

const ButtonsSection = ({ buttons, setButtons, handleHide, handleEdit }) => {
  return (
    <S.Wrapper>
      <DragDrop
        columns={buttons}
        setColumns={setButtons}
        handleHide={handleHide}
        handleEdit={handleEdit}
      />
    </S.Wrapper>
  );
};

export { SingleButton };
export default ButtonsSection;
