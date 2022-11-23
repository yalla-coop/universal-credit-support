import PropTypes from 'prop-types';

import Icon from '../Icon';

import * as S from './style';
import * as T from '../Typography';

const TextWithIcon = ({
  color = 'neutralMain',
  iconColor = 'secondaryMain',
  bgColor,
  size,
  to,
  icon = 'phone',
  text,
  external,
  underline,
  isButton,
  direction,
  handleClick,
  weight,
  disabled,
  m,
  mr,
  isText,
  pointer,
  ...props
}) => {
  if (isButton)
    return (
      <S.Button
        {...m}
        {...props}
        onClick={handleClick}
        disabled={disabled}
        type="button"
      >
        {icon && (
          <Icon
            icon={icon}
            color={iconColor}
            mr={text ? mr || '2' : '0'}
            direction={direction}
            pointer={pointer}
          />
        )}
        {text && (
          <T.H3
            weight={weight}
            color={color}
            ml={icon === null && 6}
            td={underline && 'underline'}
          >
            {text}
          </T.H3>
        )}
      </S.Button>
    );

  if (isText)
    return (
      <S.Wrapper bgColor={bgColor} size={size} {...props}>
        {icon && (
          <Icon
            icon={icon}
            color={iconColor}
            pointer={pointer}
            mr={mr || '11.5px'}
          />
        )}
        <T.H3
          to={to}
          color={color}
          weight={weight}
          td={underline && 'underline'}
          {...props}
        >
          {text}
        </T.H3>
      </S.Wrapper>
    );

  return (
    <S.Wrapper bgColor={bgColor} size={size} {...props} {...m}>
      {icon && (
        <Icon
          icon={icon}
          color={iconColor}
          pointer={pointer}
          mr={mr || '11.5px'}
        />
      )}
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
