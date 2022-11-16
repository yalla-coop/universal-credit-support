import * as S from './style';
import DragDrop from './DragDrop';
import SingleButton from './SingleButton';

const ButtonsSection = ({ buttons, setButtons }) => {
  return (
    <S.Wrapper>
      <DragDrop columns={buttons} setColumns={setButtons} />
    </S.Wrapper>
  );
};

export { SingleButton };
export default ButtonsSection;
