import { MobileNav, DesktopNav } from '.';

export default {
  title: 'Common Components/Navbar',
  component: MobileNav,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const MobileTemplate = (args) => <MobileNav {...args} />;

export const Mobile = MobileTemplate.bind({});
Mobile.args = {};

const DesktopTemplate = (args) => <DesktopNav {...args} />;

export const Desktop = DesktopTemplate.bind({});
Mobile.args = {};
