import * as S from './style';
import Icon from '../../Icon';
import Markdown from '../../Markdown';

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
        <>
          <Markdown
            color={textColor}
            mb="7px"
            text={tip}
            customStyles={{
              h3: { style: { display: 'inline' }, color: textColor },
              p: { style: { display: 'inline' }, color: textColor },
              link: {
                style: { display: 'inline' },
                color: textColor,
                weight: 'bold',
                underline: true,
              },
            }}
          />
        </>
      ) : (
        <S.TipContent>{tip}</S.TipContent>
      )}
    </S.Tip>
  );
};

export default SingleTip;
