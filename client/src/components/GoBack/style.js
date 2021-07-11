import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

export const Wrapper = styled.button`
  ${setMargin};
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
  padding-right: 3px;

  :focus-visible {
    outline: ${({ theme, color }) => `2px ${theme.colors[color]} solid`};
  }
`;
