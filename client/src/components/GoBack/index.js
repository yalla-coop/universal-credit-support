import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as T from '../Typography';
import Icon from '../Icon';
import * as S from './style';
import { useTranslation } from 'react-i18next';
import { common } from '../../constants';

const GoBack = ({
  color,
  iconColor = 'primaryDark',
  customFn,
  customLink,
  text,
  noText,
  languageBarIcon,
  ...props
}) => {
  const { t } = useTranslation();
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

  text = text ? text : t('common.buttons.goBack', common.buttons.goBack);

  return (
    <S.Wrapper onClick={goBack} color={color} {...props}>
      <Icon
        icon={languageBarIcon ? languageBarIcon : 'backwardArrow'}
        color={iconColor || color}
        pointer
      />
      {text && !noText && (
        <T.P bold ml="3" as="span" color={color}>
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
