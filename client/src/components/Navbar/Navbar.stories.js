import Navbar from '.';

export default {
  title: 'Common Components/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Navbar {...args} />;

export const TestNavbar = Template.bind({});
TestNavbar.args = {};
