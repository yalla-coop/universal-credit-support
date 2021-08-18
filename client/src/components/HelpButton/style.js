import styled from '@emotion/styled';

export const Button = styled.button`
  width: 75px;
  height: 45px;
  background: ${({ theme }) => theme.colors.secondaryMain};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 12px 12px 0px 0px;
  transform: rotate(-90deg);
  position: absolute;
  right: ${({ position }) => position.right || 0};
  top: ${({ position }) => position.top || '50%'};
  left: ${({ position }) => position.left && position.left};
  bottom: ${({ position }) => position.bottom && position.bottom};
  padding: 0;
  margin: 0;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
