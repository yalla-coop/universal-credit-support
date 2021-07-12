import styled from '@emotion/styled';
import { Spin } from 'antd';
import theme from '../../theme';
import * as T from '../Typography';
import setMargin from './../../helpers/set-margin';

export const Button = styled.button`
  ${setMargin};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ w }) => w || '100%'};
  height: 58px;
  color: ${theme.colors.white};
  position: relative;
  background: ${({ variant }) =>
    variant === 'secondary'
      ? theme.colors.tertiaryMain
      : theme.colors.primaryMain};
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;

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
