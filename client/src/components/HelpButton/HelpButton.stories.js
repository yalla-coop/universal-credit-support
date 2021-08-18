import React from 'react';

import HelpButton from '.';

export default {
  title: 'Common Components/HelpButton',
  component: HelpButton,
  argTypes: {
    color: { control: 'color' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
};

const Template = (args) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      border: '1px solid gold',
    }}
  >
    <HelpButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  width: 25,
  height: 25,
};
