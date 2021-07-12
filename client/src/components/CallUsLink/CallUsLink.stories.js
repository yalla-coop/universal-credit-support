import CallUsLink from '.';

export default {
  title: 'Common Components/CallUsLink',
  component: CallUsLink,
};

const Template = (args) => (
  <div>
    <CallUsLink {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = { href: 'tel:+65498765465', mt: 4, ml: 5 };
