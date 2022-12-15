import styled from '@emotion/styled';
// import theme from './../../theme';
import setMargin from '../../helpers/set-margin';
import * as T from '../Typography';
import { useLanguage } from '../../helpers';

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
import Refresh from './icons/Refresh';

import AF from './icons/AF';
import SQ from './icons/SQ';
import AM from './icons/AM';
import AR from './icons/AR';
import HY from './icons/HY';
import AZ from './icons/AZ';
import BN from './icons/BN';
import BS from './icons/BS';
import BG from './icons/BG';
import ZH from './icons/ZH';
import HR from './icons/HR';
import CS from './icons/CS';
import DA from './icons/DA';
import NL from './icons/NL';
import EN from './icons/EN';
import ET from './icons/ET';
import FA from './icons/FA';
import TL from './icons/TL';
import FI from './icons/FI';
import FR from './icons/FR';
import KA from './icons/KA';
import DE from './icons/DE';
import EL from './icons/EL';
import GU from './icons/GU';
import HT from './icons/HT';
import HE from './icons/HE';
import HI from './icons/HI';
import HU from './icons/HU';
import IS from './icons/IS';
import ID from './icons/ID';
import GA from './icons/GA';
import IT from './icons/IT';
import JA from './icons/JA';
import KK from './icons/KK';
import KO from './icons/KO';
import LV from './icons/LV';
import LT from './icons/LT';
import MK from './icons/MK';
import MS from './icons/MS';
import ML from './icons/ML';
import MT from './icons/MT';
import MR from './icons/MR';
import MN from './icons/MN';
import NO from './icons/NO';
import PS from './icons/PS';
import PL from './icons/PL';
import PT from './icons/PT';
import PA from './icons/PA';
import RO from './icons/RO';
import RU from './icons/RU';
import SR from './icons/SR';
import SI from './icons/SI';
import SK from './icons/SK';
import SL from './icons/SL';
import SO from './icons/SO';
import ES from './icons/ES';
import SW from './icons/SW';
import SV from './icons/SV';
import TA from './icons/TA';
import TE from './icons/TE';
import TH from './icons/TH';
import TR from './icons/TR';
import UK from './icons/UK';
import UR from './icons/UR';
import UZ from './icons/UZ';
import VI from './icons/VI';
import CY from './icons/CY';

export const FlagMap = {
  af: AF,
  sq: SQ,
  am: AM,
  ar: AR,
  hy: HY,
  az: AZ,
  bn: BN,
  bs: BS,
  bg: BG,
  zh: ZH,
  hr: HR,
  cs: CS,
  da: DA,
  nl: NL,
  en: EN,
  et: ET,
  fa: FA,
  tl: TL,
  fi: FI,
  fr: FR,
  ka: KA,
  de: DE,
  el: EL,
  gu: GU,
  ht: HT,
  he: HE,
  hi: HI,
  hu: HU,
  is: IS,
  id: ID,
  ga: GA,
  it: IT,
  ja: JA,
  kk: KK,
  ko: KO,
  lv: LV,
  lt: LT,
  mk: MK,
  ms: MS,
  ml: ML,
  mt: MT,
  mr: MR,
  mn: MN,
  no: NO,
  ps: PS,
  pl: PL,
  pt: PT,
  pa: PA,
  ro: RO,
  ru: RU,
  sr: SR,
  si: SI,
  sk: SK,
  sl: SL,
  so: SO,
  es: ES,
  sw: SW,
  sv: SV,
  ta: TA,
  te: TE,
  th: TH,
  tr: TR,
  uk: UK,
  ur: UR,
  uz: UZ,
  vi: VI,
  cy: CY,
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
  refresh: Refresh,
  textSize: TextSize,
  accessibility: Accessibility,
  backArrow: BackArrow,
  backArrowRTL: BackArrowRTL,
  search: Search,

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
