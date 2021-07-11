import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';
import setMargin from '../../helpers/set-margin';
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

const weights = {
  bold: '700 !important',
  regular: '400 !impotant',
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
  font-size: 32px !important;
  line-height: 44px !important;
  font-weight: ${({ weight }) =>
    weight === 'bold' ? '900 !important' : '300 !important'};
`;
export const H1 = (props) => <Head1 {...props} level={1} />;

const Head2 = styled(Title)`
  ${setMargin};
  ${commonStyle};
  font-size: 24px !important;
  line-height: 44px !important;
  font-weight: ${({ weight }) =>
    weight === 'bold' ? '900 !important' : '300 !important'};
`;
export const H2 = (props) => <Head2 {...props} level={2} />;

const Head3 = styled(Title)`
  ${setMargin};
  ${commonStyle};
  font-size: 20px !important;
  line-height: 32px !important;
  font-weight: ${({ weight }) =>
    weight === 'bold' ? '700 !important' : '300 !important'};
`;
export const H3 = (props) => <Head3 {...props} level={3} />;

const Head4 = styled(Title)`
  ${setMargin};
  ${commonStyle};
  font-size: 18px !important;
  line-height: 150% !important;
  font-weight: ${({ weight }) =>
    weight === 'bold' ? '700 !important' : '300 !important'};
`;
export const H4 = (props) => <Head4 {...props} level={4} />;

const Head5 = styled(Title)`
  ${setMargin};
  ${commonStyle};
  font-size: 14px !important;
  line-height: 150% !important;
  font-weight: ${({ weight }) =>
    weight === 'bold' ? '700 !important' : '400 !important'};
`;
export const H5 = (props) => <Head5 {...props} level={5} />;

export const P = styled(Paragraph)`
  ${setMargin};
  ${commonStyle};
  font-size: ${({ small }) => (small ? '14px !important' : '16px !important')};
  line-height: 150% !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '400 !important')};
  pre {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }
`;

const AntdLink = ({ to, external = false, underline, ...props }) =>
  external ? (
    <Typography.Link target="_blank" href={to} {...props} />
  ) : (
    <RouterLink
      to={to}
      component={() => <Typography.Link href={to} {...props} />}
    />
  );

export const Link = styled(AntdLink)`
  ${setMargin};
  ${commonStyle};
  font-size: 16px !important;
  line-height: 150% !important;
  font-weight: ${({ weight }) => (weight ? weights[weight] : '400 !important')};
  border-bottom: ${({ underline }) =>
    underline ? '1px solid' : 'none'} !important;
  text-decoration: none;
  border-color: ${({ theme, color }) =>
    theme.colors[color] || color || theme.colors.black} !important;
`;
