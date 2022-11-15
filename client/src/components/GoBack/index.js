import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as T from '../Typography';
import Icon from '../Icon';

import * as S from './style';

const GoBack = ({ color, iconColor, customFn, customLink, text, ...props }) => {
  const navigate = useNavigate();
  const goBack = () => {
    if (customLink) {
      navigate(customLink);
    } else if (customFn && typeof customFn === 'function') {
      customFn();
    } else {
      navigate(-1);
    }
  };

  return (
    <S.Wrapper onClick={goBack} color={color} {...props}>
      <Icon icon="backwardArrow" color={iconColor || color} />
      {text && (
        <T.P bold ml="1" as="span" color={color}>
          {text}
        </T.P>
      )}
    </S.Wrapper>
  );
};

GoBack.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default GoBack;
