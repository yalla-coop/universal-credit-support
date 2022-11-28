import SocialBanner from './index';

export default {
  title: 'Common Components/Social Banner',
  component: SocialBanner,
  argTypes: {},
};

const Template = (args) => {
  return (
    <div style={{ width: '100%' }}>
      <SocialBanner {...args} />
    </div>
  );
};

export const SocialExample = Template.bind({});
SocialExample.args = {
  title: 'Mental health',
};
