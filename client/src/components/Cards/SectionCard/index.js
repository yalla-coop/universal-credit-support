import * as S from './style';
import Icon from '../../Icon';
import * as T from '../../Typography';

const staticData = {
  1: {
    bg: 'secondaryMain',
    icon: 'house',
    iconColor: 'white',
    footerColor: 'neutralSurface',
    arrowColor: 'secondaryMain',
  },
  2: {
    bg: 'tertiaryMain',
    icon: 'bill',
    iconColor: 'neutralMain',
    footerColor: 'neutralSurface',
    arrowColor: 'tertiaryMain',
  },
  3: {
    bg: 'neutralMid',
    icon: 'basket',
    iconColor: 'neutralMain',
    footerColor: 'neutralSurface',
    arrowColor: 'neutralDark',
  },
  4: {
    bg: 'neutralLight',
    icon: 'calculator',
    iconColor: 'neutralMain',
    footerColor: 'white',
    arrowColor: 'secondaryMain',
  },
  5: {
    bg: 'neutralMain',
    icon: 'moneyBag',
    iconColor: 'white',
    footerColor: 'neutralSurface',
    arrowColor: 'neutralMain',
  },
};
const SectionCard = ({ id = 1, to = '/', text, ...props }) => {
  const item = staticData[id] || staticData[1];
  return (
    <S.Wrapper to={to} {...props}>
      <S.CardHead bg={item.bg}>
        <Icon icon={item.icon} color={item.iconColor} pointer />
      </S.CardHead>
      <S.CardFooter bg={item.footerColor}>
        <Icon icon="forwardArrow" color={item.arrowColor} mr="2" />
        <T.H3 color="neutralMain">{text}</T.H3>
      </S.CardFooter>
    </S.Wrapper>
  );
};

export default SectionCard;
