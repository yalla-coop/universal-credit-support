import * as S from './style';
import Icon from '../../Icon';
import * as T from '../../Typography';
import { contentColors } from '../../../constants';

const SectionCard = ({ id = 1, to = '/', text, ...props }) => {
  const item = contentColors[id] || contentColors[1];
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
