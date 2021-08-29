import styled from '@emotion/styled';
import { H3 } from '../Typography';
import { Link as RouterLink } from 'react-router-dom';
import { Drawer as AntDrawer } from 'antd';

export const Div = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 0;
  position: relative;
  z-index: 2;
`;

export const Head3 = styled(H3)`
  display: inline;
`;

export const Link = styled(RouterLink)`
  white-space: nowrap;
  margin-bottom: 32px;
`;

export const LogoLink = styled(RouterLink)`
  display: block;
  margin-bottom: 45px;
`;

export const LogoImg = styled.img`
  max-width: 185px;
`;

export const Drawer = styled(AntDrawer)`
  .ant-drawer-body {
    position: relative;
    padding: 30px 24px 0 38px;
    background: ${({ theme }) => theme.colors.neutralSurface};
  }
`;

export const DesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacings[8]} ${theme.spacings[7]}`};
  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  display: none;
  ${({ theme }) => theme.media.mobile} {
    display: flex;
  }
`;
