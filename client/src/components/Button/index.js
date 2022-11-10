import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  iconProps,
  ...props
}) => {
  const navigate = useNavigate();

  const onClick = (e) => {
    if (external) return;
    if (to) navigate(to);
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
      as={external ? 'a' : 'button'}
      icon={icon}
      {...props}
    >
      {icon && <Icon icon={icon} mr="9.5px" {...iconProps} />}
      {text}
      {loading && <S.Loading variant={variant} indicator={antIcon} />}
    </S.Button>
  );
};

export default Button;
