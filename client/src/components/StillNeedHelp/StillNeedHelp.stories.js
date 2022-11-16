import StillNeedHelp from '.';

const containerStyle = {
  width: '100%',
  maxWidth: '375px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid red',
  margin: 'auto',
  marginTop: '300px',
  padding: '0 37.5px',
};

export default {
  title: 'Common Components/StillNeedHelp',
  component: StillNeedHelp,
};

const Template = (args) => (
  <div style={containerStyle}>
    <StillNeedHelp {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = { phoneNumber: '0800 138 7777', name: null };

export const withName = Template.bind({});
withName.args = { phoneNumber: '0800 138 7777', name: 'Fadi' };
