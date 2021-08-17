import * as T from '../Typography';
import * as S from './style';
import Icon from '../Icon';

const Info = ({
  error,
  value,
  handleChange,
  m, // margins
  allowClear,
  goals,
  title,
  body,
  infoIconStyle,
  noBorder,
  ...props
}) => {
  return (
    <S.CardWrapper noBorder={noBorder} {...m}>
      <T.P color="white">?</T.P>
      <S.Content>
        {title && (
          <T.P bold color="gray9" mb="0">
            {title}
          </T.P>
        )}
        {body && typeof body === 'string' ? (
          <T.P mb="0" color="gray9">
            {body}
          </T.P>
        ) : (
          body
        )}
      </S.Content>
    </S.CardWrapper>
  );
};

export default Info;
