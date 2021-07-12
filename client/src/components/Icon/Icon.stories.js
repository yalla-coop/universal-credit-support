import React from 'react';

import Icon, { IconMap } from '.';

export default {
  title: 'Common Components/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
};

const Template = (args) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {Object.keys(IconMap).map((key) => (
      <div style={{ width: 200, margin: 20 }} key={key}>
        <Icon icon={key} {...args} />
        <span style={{ marginTop: 20 }}>{key}</span>
      </div>
    ))}
  </div>
);

export const Icons = Template.bind({});
Icons.args = {
  width: 25,
  height: 25,
};
