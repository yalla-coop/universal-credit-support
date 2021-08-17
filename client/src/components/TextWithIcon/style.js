import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';
import { Link as TypoLink } from '../Typography';

// export const Wrapper = styled.a`
//   ${setMargin};
//   color: ${({ color, theme }) => theme.colors[color] || color || '#1A202C'};
//   text-decoration: underline;
//   display: flex;
//   width: 100%;
//   align-items: center;
//   justify-content: flex-start;
//   ${({ theme }) => theme.media.mobile} {
//     justify-content: center;
//   }
// `;

export const Wrapper = styled.div`
  ${setMargin};
  ${
    '' /* color: ${({ color, theme }) => theme.colors[color] || color || '#1A202C'}; */
  }
  ${'' /* text-decoration: underline; */}
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  ${({ theme }) => theme.media.mobile} {
    justify-content: center;
  }
`;

export const Link = styled(TypoLink)`
  ${({ theme }) => theme.media.mobile} {
    margin: 0 !important;
  }
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  ${'' /* line-height: 24px;
  margin-left: 11.5px; */}
`;
