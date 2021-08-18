import PropTypes from 'prop-types';

import Icon from '../Icon';

import * as S from './style';
import * as T from '../Typography';

const TextWithIcon = ({
  color = 'neutralPrimary',
  iconColor = 'secondaryMain',
  to,
  icon = 'phone',
  text = 'Stuck? Call us for advice',
  external,
  underline,

  ...props
}) => {
  return (
    <S.Wrapper>
      {icon && <Icon icon={icon} color={iconColor} mr="11.5px" />}
      <T.Link
        to={to}
        color={color}
        external={external}
        underline={underline}
        {...props}
      >
        <S.Text>{text}</S.Text>
      </T.Link>
    </S.Wrapper>
  );
};

TextWithIcon.propTypes = {
  href: PropTypes.string.isRequired,
};

export default TextWithIcon;
