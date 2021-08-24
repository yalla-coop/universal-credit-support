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

const commonStyle = ({ theme, color, caps, ta, ...props }) => `
  font-style: normal !important;
  letter-spacing: 0.2px !important;
  color: ${theme.colors[color] || color || theme.colors.black} !important;
  text-transform: ${caps ? 'uppercase' : 'initial'} !important;
  text-align: ${ta || 'left'} !important;
`;

const Head1 = styled(Title)`
  ${setMargin};
  ${commonStyle};
  font-family: hero-new-hairline, sans-serif;
  font-size: 32px !important;
  line-height: 44px !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '700 !important')};

  ${({ theme }) => theme.media.mobile} {
    font-size: 22px !important;
    line-height: 32px !important;
  }
`;
export const H1 = (props) => <Head1 {...props} level={1} />;

const Head2 = styled(Title)`
  ${setMargin};
  ${commonStyle};
  font-family: hero-new-hairline, sans-serif;
  font-size: 20px !important;
  line-height: 24px !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '600 !important')};
`;
export const H2 = (props) => <Head2 {...props} level={2} />;

const Head3 = styled(Title)`
  ${setMargin};
  ${commonStyle};
  font-family: hero-new-hairline, sans-serif;
  font-size: 16px !important;
  line-height: 24px !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '600 !important')};
  text-decoration: ${({ td }) => td || 'none'};
`;
export const H3 = (props) => <Head3 {...props} level={3} />;

export const P = styled(({ isSmall, ...props }) => <Paragraph {...props} />)`
  ${setMargin};
  ${commonStyle};
  font-size: 16px !important;
  line-height: 24px !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '400 !important')};
  pre {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ isSmall }) =>
      isSmall ? '14px !important' : '16px !important'};
    line-height: ${({ isSmall }) =>
      isSmall ? '20px !important' : '24px !important'};
  }
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
  font-size: 16px !important;
  line-height: 24px !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '400 !important')};

  text-decoration: ${({ underline }) =>
    underline ? 'underline' : 'none'} !important;
`;
