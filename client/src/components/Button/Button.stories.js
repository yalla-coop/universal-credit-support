/* eslint-disable no-console */
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

export const Loading = Template.bind({});
Loading.args = {
  label: 'Button',
  disabled: false,
  loading: true,
};

export const Disable = Template.bind({});
Disable.args = {
  label: 'Button',
  disabled: true,
  loading: false,
};
