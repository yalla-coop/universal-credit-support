import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import Icon from '../Icon';
import * as S from './style';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

/**
 * Primary UI component for user interaction
 */
const Button = ({
  variant = 'primary',
  text,
  icon,
  loading,
  handleClick,
  disabled,
  to,
  customColor,
  external,
  iconProps,
  children,
  linkState = {},
  ...props
}) => {
  const onClick = (e) => {
    if (external) return;
    if (handleClick instanceof Function) handleClick(e);
  };
  if (to) {
    if (external) {
      props.href = to;
      props.target = '_blank';
    } else {
      props.href = to;
    }
  }

  return (
    <S.Button
      type="button"
      variant={variant}
      disabled={disabled}
      isLoading={loading}
      onClick={onClick}
      as={to ? 'a' : 'button'}
      icon={icon}
      {...props}
    >
      {icon && <Icon icon={icon} mr="9.5px" {...iconProps} />}
      {text || children}
      {loading && <S.Loading variant={variant} indicator={antIcon} />}
    </S.Button>
  );
};

export default Button;
