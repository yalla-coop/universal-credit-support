import * as S from './style';
import * as T from '../../Typography';
import Icon from '../../Icon';
import { useTranslation } from 'react-i18next';
import { common } from '../../../constants';

const SingleTip = ({
  bgColor = 'primaryMain',
  icon = 'bulb',
  iconColor,
  tip,
  textColor,
  borderColor,
  ...props
}) => {
  const { t } = useTranslation();
  const _borderColor = borderColor || textColor || iconColor;
  const _tip = t('common.heading.tip', common.heading.tip);
  return (
    <S.Tip bgColor={bgColor} borderColor={_borderColor} {...props}>
      {icon && <Icon icon="bulb" color={iconColor} mr="2" />}
      {typeof tip === 'string' ? (
        <T.H3 color={textColor} mb="7px">
          {_tip} {tip}
        </T.H3>
      ) : (
        <S.TipContent>{tip}</S.TipContent>
      )}
    </S.Tip>
  );
};

export default SingleTip;
