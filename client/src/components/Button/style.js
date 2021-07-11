import styled from '@emotion/styled';
import { Spin } from 'antd';
import theme from '../../theme';
import * as T from '../Typography';
import setMargin from './../../helpers/set-margin';

const decideType = (type) => {
  switch (type) {
    case 'primary':
      return {
        borderColor: theme.gradients.white,
        background: theme.gradients.Blue,
      };
    case 'secondary':
      return {
        background: theme.colors.white,
        borderColor: theme.gradients.lightGreenUnder,
      };
    case 'tertiary':
      return {
        background: theme.colors.white,
        borderColor: theme.gradients.rainbowHorizontal,
      };
    case 'remove':
      return {
        background: theme.colors.white,
        borderColor: theme.gradients.PinkUnder,
      };
    case 'gray':
      return {
        background: theme.colors.white,
        borderColor: theme.colors.gray6,
      };
    default:
      return {
        borderColor: theme.gradients.white,
        background: theme.gradients.Blue,
      };
  }
};

export const Button = styled.button`
  ${setMargin};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ w }) => w || '100%'};
  height: 56px;
  color: ${({ variant }) =>
    variant === 'primary' ? theme.colors.white : theme.colors.black};
  position: relative;
  background: ${({ variant, customColor }) =>
    variant === 'primary'
      ? theme.colors[customColor] || theme.gradients.Blue
      : 'white'};
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px; /*1*/
    border: ${({ variant }) =>
      variant !== 'primary' && '3px solid transparent'}; /*2*/
    background: ${({ theme, variant }) =>
      variant !== 'primary' &&
      `${decideType(variant).borderColor} border-box`}; /*3*/
    -webkit-mask: ${({ theme, variant }) => `linear-gradient(${
      decideType(variant).background
    } 0 0) padding-box,
    linear-gradient(${theme.colors.white} 0 0)`}; /*4*/
    -webkit-mask-composite: destination-out; /*5'*/
    mask-composite: exclude; /*5*/
  }

  /* clicking style */
  :active {
    opacity: 0.9;
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
    color: ${({ variant, theme }) =>
      variant === 'primary' ? 'white' : theme.colors.gray5};
  }
`;

export const Label = styled(T.P)``;
