import PropTypes from 'prop-types';

import Icon from '../Icon';

import * as S from './style';
import * as T from '../Typography';

const TextWithIcon = ({
  color = 'neutralMain',
  iconColor = 'secondaryMain',
  to,
  icon = 'phone',
  text = 'Stuck? Call us for advice',
  external,
  underline,
  isButton,
  direction,
  handleClick,
  weight,
  disabled,
  mr,
  ...props
}) => {
  if (isButton)
    return (
      <S.Button {...props} onClick={handleClick} disabled={disabled}>
        {icon && (
          <Icon
            icon={icon}
            color={iconColor}
            mr={mr || '2'}
            direction={direction}
          />
        )}
        <T.H3 weight={weight} color={color} td={underline && 'underline'}>
          {text}
        </T.H3>
      </S.Button>
    );

  return (
    <S.Wrapper {...props}>
      {icon && <Icon icon={icon} color={iconColor} mr="11.5px" />}
      <T.Link
        to={to}
        color={color}
        external={external}
        underline={underline}
        {...props}
      >
        <T.H3 weight={weight} color={color}>
          {text}
        </T.H3>
      </T.Link>
    </S.Wrapper>
  );
};

TextWithIcon.propTypes = {
  href: PropTypes.string.isRequired,
};

export default TextWithIcon;
