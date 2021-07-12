import GoBack from '.';

export default {
  title: 'Common Components/Go Back',
  component: GoBack,
};

const Template = (args) => <GoBack {...args} m="2" />;
const WrappedTemplate = (args) => (
  <div style={{ background: 'green', padding: '20px' }}>
    <GoBack {...args} />
  </div>
);

export const Default = Template.bind({});

export const White = WrappedTemplate.bind({});
White.args = { color: 'white', iconColor: 'white' };
