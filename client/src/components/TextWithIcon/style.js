import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

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
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  ${({ theme }) => theme.media.mobile} {
    justify-content: center;
  }
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
