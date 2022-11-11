import styled from '@emotion/styled';
// import theme from './../../theme';
import setMargin from '../../helpers/set-margin';
import * as T from '../Typography';

import { useTheme } from '@emotion/react';

// ICONS

import GoBack from './icons/GoBack';
import ArrowDown from './icons/ArrowDown';
import Close from './icons/Close';
import Phone from './icons/Phone';
import Tick from './icons/Tick';
import Time from './icons/Time';
import Checklist1 from './icons/Checklist1';
import Checklist2 from './icons/Checklist2';
import Menu from './icons/Menu';
import Flag from './icons/Flag';
import Open from './icons/Open';
import ForwardArrow from './icons/ForwardArrow';
import Add from './icons/Add';
import Question from './icons/Question';
import CircleArrow from './icons/CircleArrow';
import Bulb from './icons/Bulb';
import BulletArrow from './icons/BulletArrow';
import Compass from './icons/Compass';
import Upload from './icons/Upload';
import TextSize from './icons/TextSize';
import Accessibility from './icons/Accessibility';
import BackArrow from './icons/BackArrow';
import BackArrowRTL from './icons/BackArrowRTL';
import Search from './icons/Search';
import House from './icons/House';
import Bill from './icons/Bill';
import Basket from './icons/Basket';
import Calculator from './icons/Calculator';
import MoneyBag from './icons/MoneyBag';

import EN from './icons/EN';
import AR from './icons/AR';

export const FlagMap = {
  en: EN,
  ar: AR,
};

export const IconMap = {
  goBack: GoBack,
  arrowDown: ArrowDown,
  close: Close,
  phone: Phone,
  tick: Tick,
  time: Time,
  checklist1: Checklist1,
  checklist2: Checklist2,
  menu: Menu,
  flag: Flag,
  open: Open,
  forwardArrow: ForwardArrow,
  add: Add,
  question: Question,
  circleArrow: CircleArrow,
  bulb: Bulb,
  bulletArrow: BulletArrow,
  compass: Compass,
  upload: Upload,
  textSize: TextSize,
  accessibility: Accessibility,
  backArrow: BackArrow,
  backArrowRTL: BackArrowRTL,
  search: Search,
  house: House,
  bill: Bill,
  basket: Basket,
  calculator: Calculator,
  moneyBag: MoneyBag,
  ...FlagMap,
};

const Parent = styled.div`
  ${setMargin}
  display: flex;
  align-items: center;
  justify-content: ${({ jc }) => jc || 'flex-start'};
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'auto')};
`;

const Icon = (props) => {
  const theme = useTheme();
  const { icon, color, text, weight = 'bold', pointer } = props;

  if (!IconMap[icon]) {
    // eslint-disable-next-line no-console
    console.warn(`<Icon /> called with invalid icon prop "${icon}"`);
    return null;
  }

  const StyledIcon = IconMap[icon];

  return (
    <Parent {...props} onClick={undefined} pointer={pointer || props.onClick}>
      <StyledIcon
        {...props}
        color={theme.colors[color] || color || 'currentColor'}
      />
      {text && (
        <T.P weight={weight} ml="1" color={color}>
          {text}
        </T.P>
      )}
    </Parent>
  );
};

export default Icon;
