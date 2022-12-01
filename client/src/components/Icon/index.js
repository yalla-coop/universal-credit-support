import styled from '@emotion/styled';
import { useLanguage } from '../../helpers';

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
import Hide from './icons/Hide';
import Menu2 from './icons/Menu2';
import Edit from './icons/Edit';
import BookMark from './icons/BookMark';
import Discover from './icons/Discover';
import BackwardArrow from './icons/BackwardArrow';
import Refresh from './icons/Refresh';

import English from './icons/English';
import Arabic from './icons/Arabic';
import French from './icons/French';
import Italian from './icons/Italian';
import German from './icons/German';
import Urdu from './icons/Urdu';
import Polish from './icons/Polish';
import Russian from './icons/Russian';
import Portuguese from './icons/Portuguese';
import Spanish from './icons/Spanish';
import Hindi from './icons/Hindi';

export const FlagMap = {
  english: English,
  arabic: Arabic,
  french: French,
  italian: Italian,
  german: German,
  urdu: Urdu,
  polish: Polish,
  russian: Russian,
  portuguese: Portuguese,
  spanish: Spanish,
  hindi: Hindi,
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
  hide: Hide,
  menu2: Menu2,
  edit: Edit,
  bookMark: BookMark,
  discover: Discover,
  backwardArrow: BackwardArrow,
  refresh: Refresh,

  ...FlagMap,
};

const Parent = styled.div`
  ${setMargin}
  display: flex;
  align-items: center;
  justify-content: ${({ jc }) => jc || 'flex-start'};
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'auto')};
  transform: ${({ rotate }) => (rotate ? 'rotateY(180deg)' : 'none')};
`;

const Icon = (props) => {
  const theme = useTheme();
  const {
    icon,
    color,
    text,
    weight = 'bold',
    pointer,
    followLangDirection = true,
  } = props;
  const { dir } = useLanguage();

  const rotate = followLangDirection && dir === 'rtl';

  if (!IconMap[icon]) {
    // eslint-disable-next-line no-console
    console.warn(`<Icon /> called with invalid icon prop "${icon}"`);
    return null;
  }

  const StyledIcon = IconMap[icon];

  return (
    <Parent
      {...props}
      onClick={undefined}
      pointer={pointer || props.onClick}
      rotate={rotate}
    >
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
