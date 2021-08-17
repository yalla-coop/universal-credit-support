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
    <S.CardWrapper {...m}>
      <S.Content>
        {title && (
          <T.P weight="bold" isSmall color="neutralMain" mb="0">
            {title}
          </T.P>
        )}
        {body && typeof body === 'string' ? (
          <T.P isSmall mb="0" color="neutralMain">
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
