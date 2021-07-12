import React from 'react';

import Icon from '.';

export default {
  title: 'Common Components/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
};

const Template = (args) => <Icon {...args} />;

export const Email = Template.bind({});
Email.args = {
  icon: 'add',
  width: 50,
  height: 50,
  text: '',
};

export const WithText = Template.bind({});
WithText.args = {
  icon: 'download',
  width: 16,
  height: 16,
  text: 'Download video',
};
