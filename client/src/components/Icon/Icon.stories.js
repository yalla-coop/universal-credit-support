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

export const ArrowDown = Template.bind({});
ArrowDown.args = {
  icon: 'arrowDown',
  width: 50,
  height: 50,
};

export const Close = Template.bind({});
Close.args = {
  icon: 'close',
  width: 50,
  height: 50,
};

export const Phone = Template.bind({});
Phone.args = {
  icon: 'phone',
  width: 50,
  height: 50,
};
