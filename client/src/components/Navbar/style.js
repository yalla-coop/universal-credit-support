import styled from '@emotion/styled';
import { H2 } from '../Typography';
import { Link as RouterLink } from 'react-router-dom';
import { Drawer as AntDrawer } from 'antd';

export const Div = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0;
  position: relative;
  z-index: 2;
  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    margin-top: 38px;
  }
`;

export const Head4 = styled(H2)`
  display: inline;
`;

export const Link = styled(RouterLink)`
  padding: 12px;
  white-space: nowrap;
`;

export const Drawer = styled(AntDrawer)`
  .ant-drawer-body {
    position: relative;
    padding: 30px 24px 0 38px;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: ${({ theme }) => theme.spacings[1]};
      background: ${({ theme }) => theme.gradients.rainbowHorizontal};
    }
  }
`;

export const RainbowContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
