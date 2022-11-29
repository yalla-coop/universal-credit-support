import { Textarea } from '../Inputs';
import Icon from '../Icon';

import * as S from './style';

const TipInput = ({ content, id, setTip, removeTip }) => {
  return (
    <S.TipInputWrapper>
      <Textarea
        label="Tips"
        optional
        rows="3"
        value={content}
        handleChange={(value) => setTip(value, id)}
      />
      <S.CloseTipButton type="button" onClick={() => removeTip(id)}>
        <Icon icon="close" pointer color="primaryDark" />
      </S.CloseTipButton>
    </S.TipInputWrapper>
  );
};

export default TipInput;
