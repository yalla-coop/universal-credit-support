import PropTypes from 'prop-types';

import Icon from '../Icon';

import * as S from './style';

// import * as T from '../Typography';

const TextWithIcon = ({
  color = 'neutralPrimary',
  to,
  icon = 'phone',
  iconColor = 'secondaryMain',
  text = 'Stuck? Call us for advice',
  external,
  underline,
  ...props
}) => {
  return (
    <S.Wrapper>
      {icon && (
        <Icon icon={icon} color={iconColor} style={{ marginRight: 12 }} />
      )}
      <S.Link
        href={to}
        color={color}
        external={external}
        underline={underline}
        {...props}
      >
        asd
        <S.Text>{text}</S.Text>
      </S.Link>
    </S.Wrapper>
  );
};

TextWithIcon.propTypes = {
  href: PropTypes.string.isRequired,
};

export default TextWithIcon;
