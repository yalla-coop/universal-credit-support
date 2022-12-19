import * as S from './style';
import DragDrop from './DragDrop';
import SingleButton from './SingleButton';
import { useNavigate } from 'react-router-dom';
import { navRoutes } from '../../constants';

const ButtonsSection = ({ buttons, setButtons, handleHide }) => {
  const navigate = useNavigate();

  const handleEdit = (item) => {
    navigate(navRoutes.ADMIN.SECTION.replace(':id', item.id));
  };

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
