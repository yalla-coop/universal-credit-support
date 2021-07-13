import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import Icon from '../Icon';
import * as S from './style';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

/**
 * Primary UI component for user interaction
 */
const Button = ({
  variant = 'primary',
  text = 'Click',
  icon,
  loading,
  handleClick,
  disabled,
  to,
  customColor,
  external,
  ...props
}) => {
  const history = useHistory();

  const onClick = (e) => {
    if (external) return;
    if (to) history.push(to);
    if (handleClick instanceof Function) handleClick(e);
  };

  if (external) {
    props.href = to;
  }

  return (
    <S.Button
      type="button"
      variant={variant}
      disabled={disabled}
      isLoading={loading}
      onClick={onClick}
      {...props}
    >
      {icon && <Icon icon={icon} />}
      {text}
      {loading && <S.Loading variant={variant} indicator={antIcon} />}
    </S.Button>
  );
};

export default Button;
