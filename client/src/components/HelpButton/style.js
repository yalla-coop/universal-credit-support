import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

export const Button = styled.button`
  width: 90px;
  height: 45px;
  background: ${({ theme }) => theme.colors.secondaryMain};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 12px 12px 0px 0px;
  transform: rotate(-90deg);
  position: fixed;
  right: ${({ position }) => position.right || 0};
  top: ${({ position }) => position.top || '65%'};
  left: ${({ position }) => position.left && position.left};
  bottom: ${({ position }) => position.bottom && position.bottom};
  padding: 0;
  margin: 0;
  margin-right: ${({ mr }) => mr || '-25px'};
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Modal = styled.section`
  z-index: 100;
  position: fixed;
  right: ${({ theme: { spacings } }) => spacings[3]};
  margin-left: 20px;
  bottom: ${({ theme: { spacings } }) => spacings[5]};
  border: 0;
  border-radius: ${({ theme: { borders } }) => borders.radiusLarge};
  min-width: 280px;
  max-width: 450px;
  box-sizing: border-box;
  overflow: hidden;
  background: ${({ theme: { colors } }) => colors.white};
  box-shadow: ${({ theme: { shadows } }) => shadows.elevation1};
`;

export const Header = styled.div`
  width: 100%;
  background: ${({ theme: { colors } }) => colors.secondaryMain};
  display: flex;
  justify-content: space-between;
  padding: ${({ theme: { spacings } }) => spacings[4]};
`;

export const CloseButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Content = styled.div`
  padding: ${({ theme: { spacings } }) => spacings[4]};
  width: 100%;
`;

export const ContactItem = styled.div`
  ${setMargin};
  width: 100%;
`;
