import PropTypes from 'prop-types';

import Icon from '../Icon';

import * as S from './style';

const CallUsLink = ({
  color = 'neutralPrimary',
  href,
  icon = 'phone',
  iconColor = 'secondaryMain',
  text = 'Stuck? Call us for advice',
  ...props
}) => {
  return (
    <S.Wrapper href={href} color={color} {...props}>
      {icon && <Icon icon={icon} color={iconColor} />}
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
};

CallUsLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default CallUsLink;
