import styled from '@emotion/styled';
import theme from './../../theme';
import setMargin from '../../helpers/set-margin';
import * as T from '../Typography';

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
};

const Icon = (props) => {
  const { icon, color, text, jc, weight = 'bold' } = props;

  if (!IconMap[icon]) {
    // eslint-disable-next-line no-console
    console.warn(`<Icon /> called with invalid icon prop "${icon}"`);
    return null;
  }

  const StyledIcon = IconMap[icon];

  const Parent = styled.div`
    ${setMargin}
    display: flex;
    align-items: center;
    justify-content: ${jc || 'flex-start'};
  `;

  return (
    <Parent {...props}>
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
