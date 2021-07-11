import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as T from '../Typography';
import Icon from '../Icon';

import * as S from './style';

const GoBack = ({ color = 'gray8', customFn, customLink, text, ...props }) => {
  const history = useHistory();
  const goBack = () => {
    if (customLink) {
      history.push(customLink);
    } else if (customFn && typeof customFn === 'function') {
      customFn();
    } else {
      history.goBack();
    }
  };

  return (
    <S.Wrapper onClick={goBack} color={color} {...props}>
      <Icon icon="goBack" width={35} height={11} color={color} />
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
