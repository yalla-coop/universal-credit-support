import TextWithIcon from '.';

const containerStyle = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default {
  title: 'Common Components/TextWithIcon',
  component: TextWithIcon,
};

const Template = (args) => (
  <div style={containerStyle}>
    <TextWithIcon {...args} />
  </div>
);

export const phoneLink = Template.bind({});
phoneLink.args = { to: 'tel:+65498765465', underline: true };

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  to: 'https://calendar.google.com/',
  external: true,
  underline: true,
  text: 'View demo video',
  icon: 'open',
};
export const InternalLink = Template.bind({});
InternalLink.args = {
  to: '/',
  text: 'Don’t have an account? Sign up',
  icon: 'forwardArrow',
};
