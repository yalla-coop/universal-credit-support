import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

export const Wrapper = styled.a`
  ${setMargin};
  color: ${({ color, theme }) => theme.colors[color] || color || '#1A202C'};
  text-decoration: underline;
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-left: 11.5px;
`;
