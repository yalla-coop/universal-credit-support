import React from 'react';

import Button from '.';

export default {
  title: 'Common Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
    <div style={{ width: '300px' }}>
      <Button {...args} handleClick={() => console.log('Clicked')} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  variant: 'primary',
  disabled: false,
  loading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  variant: 'secondary',
  disabled: false,
  loading: false,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Button',
  variant: 'tertiary',
  disabled: false,
  loading: false,
};

export const Remove = Template.bind({});
Remove.args = {
  label: 'Button',
  variant: 'remove',
  disabled: false,
  loading: false,
};

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  variant: 'default',
  disabled: false,
  loading: false,
};
