import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';
import setMargin from '../../helpers/set-margin';
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

const weights = {
  bold: '700 !important',
  semi: '600 !important',
  medium: '500 !important',
  regular: '400 !important',
  light: '300 !important',
};

const commonStyle = ({
  theme,
  color,
  caps,
  ta,
  taT,
  taM,
  italic,
  ...props
}) => `
  font-style:${italic ? 'italic' : 'normal'}  !important;
  font-family: ${({ theme }) => theme.layoutFontFamily || 'inherit'} !important;
  letter-spacing: 0.2px !important;
  color: ${
    color === 'neutralDark' && theme.layoutColor
      ? theme.colors.neutralMain
      : theme.colors[color] || color || theme.colors.neutralMain
  } !important;
  text-transform: ${caps ? 'uppercase' : 'initial'} !important;
  text-align: ${ta || 'left'} !important;

  ${theme.media.tablet} {
    text-align: ${taT || ta || 'left'} !important;
  };
  ${theme.media.mobile} {
    text-align: ${taM || taT || ta || 'left'} !important;
  };
`;

const Head0 = styled(Title)`
  ${setMargin};
  ${commonStyle};
  font-family: ${({ theme }) =>
    theme.layoutFontFamily || "'new-hero', sans-serif"};
  font-size: 2.5rem !important;
  line-height: auto !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '700 !important')};

  ${({ theme }) => theme.media.mobile} {
    font-size: 1.5rem !important;
    line-height: auto !important;
  }
`;
export const H0 = (props) => <Head0 {...props} level={1} />;

const Head1 = styled(Title)`
  ${setMargin};
  ${commonStyle};
  font-family: ${({ theme }) =>
    theme.layoutFontFamily || "'new-hero', sans-serif"};
  font-size: 2rem !important;
  line-height: 44px !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '700 !important')};

  ${({ theme }) => theme.media.mobile} {
    font-size: 1.375rem !important;
    line-height: 32px !important;
  }
`;
export const H1 = (props) => <Head1 {...props} level={1} />;

const Head2 = styled(Title)`
  ${setMargin};
  ${commonStyle};
  font-family: ${({ theme }) =>
    theme.layoutFontFamily || "'new-hero', sans-serif"};
  font-size: 1.25rem !important;
  line-height: 28px !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '600 !important')};
`;
export const H2 = (props) => <Head2 {...props} level={2} />;

const Head3 = styled(Title)`
  ${setMargin};
  ${commonStyle};
  font-family: ${({ theme }) =>
    theme.layoutFontFamily || "'new-hero', sans-serif"};
  font-size: 1rem !important;
  line-height: 24px !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '600 !important')};
  text-decoration: ${({ td }) => td || 'none'};
`;
export const H3 = (props) => <Head3 {...props} level={3} />;

export const P = styled(({ isSmall, ...props }) => {
  return <Paragraph {...props} />;
})`
  ${setMargin};
  ${commonStyle};
  line-height: 24px !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '400 !important')};
  pre {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }

  font-size: ${({ isSmall }) =>
    isSmall ? '0.875rem !important' : '1rem !important'};
  line-height: ${({ isSmall }) =>
    isSmall ? '1.25rem !important' : '1.5rem !important'};
`;

const AntdLink = ({ to, external = false, underline, ...props }) => {
  return external ? (
    <Typography.Link target="_blank" href={to} {...props} />
  ) : (
    <RouterLink to={to} {...props}>
      {props.children}
    </RouterLink>
  );
};
export const Link = styled(AntdLink)`
  ${setMargin};
  ${commonStyle};
  font-size: ${({ fontSize }) => fontSize || '1rem'} !important;
  line-height: 24px !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '400 !important')};

  text-decoration: ${({ underline }) =>
    underline ? 'underline' : 'none'} !important;
  display: ${({ display }) => display || 'inline'} !important;
`;
