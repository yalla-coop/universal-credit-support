import styled from '@emotion/styled';

export const ColorDiv = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 2px;
  background: ${({ color }) => color};
`;

export const SwatchDiv = styled.div`
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: inline-block;
  cursor: pointer;
  width: 100%;
`;

export const PopoverDiv = styled.div`
  position: absolute;
  z-index: 2;
`;

export const CoverDiv = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
