import theme from '../../../theme';

export const buttonStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  minHeight: 52,
  color: theme.colors.neutralMain,
  backgroundColor: theme.colors.white,
  border: `2px solid ${theme.colors.primaryMain}`,
  borderRadius: 12,
  fontSize: '1rem',
  fontWeight: 'bold',
  padding: `0 ${theme.spacings[3]}`,
  cursor: 'pointer',
};
