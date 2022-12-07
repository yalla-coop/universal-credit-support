import MDEditor from '../MDEditor';
import Icon from '../Icon';

import * as S from './style';

const TipInput = ({ content, id, setTip, removeTip }) => {
  return (
    <S.TipInputWrapper>
      <MDEditor
        label="Tips"
        optional
        rows="3"
        value={content}
        placeholder={`Tips...`}
        onChange={(value) => setTip(value, id)}
      />
      <S.CloseTipButton type="button" onClick={() => removeTip(id)}>
        <Icon icon="close" pointer color="primaryMain" />
      </S.CloseTipButton>
    </S.TipInputWrapper>
  );
};

export default TipInput;
