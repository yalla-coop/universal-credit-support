import * as S from './style';
import * as T from '../Typography';

const HelpButton = ({ position = {}, ...props }) => {
  return (
    <S.Button position={position} {...props}>
      <T.H3 color="white">Help</T.H3>
    </S.Button>
  );
};

export default HelpButton;
