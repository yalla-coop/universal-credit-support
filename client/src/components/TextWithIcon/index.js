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
  ...props
}) => {
  if (isButton)
    return (
      <S.Button {...props} onClick={handleClick} disabled={disabled}>
        {icon && (
          <Icon icon={icon} color={iconColor} mr="2" direction={direction} />
        )}
        <T.H3 weight={weight} color={color}>
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
        <S.Text color={color}>{text}</S.Text>
      </T.Link>
    </S.Wrapper>
  );
};

TextWithIcon.propTypes = {
  href: PropTypes.string.isRequired,
};

export default TextWithIcon;
