import styled from '@emotion/styled';
import theme from './../../theme';
import setMargin from '../../helpers/set-margin';
import * as T from '../Typography';

// ICONS

import GoBack from './icons/GoBack';

const Icon = (props) => {
  const { icon, color, text, jc, weight = 'bold' } = props;

  const IconMap = {
    goBack: GoBack,
  };

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
