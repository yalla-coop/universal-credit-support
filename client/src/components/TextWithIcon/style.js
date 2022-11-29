import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

export const Wrapper = styled.div`
  ${setMargin};
  display: flex;
  width: 100%;
  align-items: ${({ ai }) => ai || 'center'};
  justify-content: ${({ jc }) => jc || 'flex-start'};
  padding: ${({ theme, size }) => (size === 'large' ? theme.spacings[4] : 0)};
  border-radius: ${({ size }) => size === 'large' && '8px'};
  background: ${({ theme, bgColor }) => {
    return bgColor && (theme.colors[bgColor] || bgColor);
  }};
  ${({ theme }) => theme.media.Tablet} {
    justify-content: ${({ jc, jcT }) => jcT || jc || 'flex-start'};
  }
  ${({ theme }) => theme.media.mobile} {
    justify-content: ${({ js, jsT, jsM }) => jsM || jsT || js || 'flex-start'};
  }
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 24px;
  color: ${({ color, theme }) => theme.colors[color] || color || '#1A202C'};
`;

export const Button = styled.button`
  ${setMargin};
  background: none;
  outline: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  display: flex;
  max-width: 100%;
  align-items: ${({ ai }) => ai || 'center'};
  justify-content: ${({ jc }) => jc || 'flex-start'};
`;
