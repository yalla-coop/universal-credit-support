import * as S from './style';
import * as T from '../../Typography';
import Icon from '../../Icon';

const SingleTip = ({
  bgColor = 'primaryMain',
  icon = 'bulb',
  iconColor,
  tip,
  textColor,
  borderColor,
  ...props
}) => {
  const _borderColor = borderColor || textColor || iconColor;
  return (
    <S.Tip bgColor={bgColor} borderColor={_borderColor} {...props}>
      {icon && <Icon icon="bulb" color={iconColor} mr="2" />}
      {typeof tip === 'string' ? (
        <T.H3 color={textColor}>Tip! {tip}</T.H3>
      ) : (
        tip
      )}
    </S.Tip>
  );
};

export default SingleTip;
