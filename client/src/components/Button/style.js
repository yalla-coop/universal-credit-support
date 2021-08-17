import styled from '@emotion/styled';
import { Spin } from 'antd';
import theme from '../../theme';
import * as T from '../Typography';
import setMargin from './../../helpers/set-margin';

export const Button = styled.button`
  ${setMargin};
  display: flex;
  justify-content: ${({ variant, icon }) =>
    variant === 'tertiary' && icon ? 'space-between' : 'center'};
  flex-direction: ${({ variant, icon }) =>
    variant === 'tertiary' && icon ? 'row-reverse' : 'row'};
  align-items: center;
  width: ${({ w }) => w || '100%'};
  height: ${({ icon, variant }) => {
    if (icon && variant === 'primary') {
      return '67px';
    } else if (variant === 'tertiary') {
      return '52px';
    } else {
      return '58px';
    }
  }};
  color: ${({ variant }) =>
    variant === 'primary' ? theme.colors.white : theme.colors.neutralMain};
  position: relative;
  background: ${({ variant }) =>
    variant === 'primary' ? theme.gradients.primary : 'transparent'};
  border: ${({ variant }) =>
    variant === 'secondary'
      ? theme.colors.neutralMain
      : theme.colors.primaryMain};
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0 14px;

  /* clicking style */
  :active {
    opacity: 0.9;
    transform: translateY(1px) scale(0.99);
  }

  /* for disabled style */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled, isLoading }) =>
    disabled || isLoading ? 'not-allowed' : 'pointer'};
`;

export const Loading = styled(Spin)`
  span {
    line-height: 24px;
    margin-left: 10px;
    color: ${theme.colors.white};
  }
`;

export const Label = styled(T.P)``;
