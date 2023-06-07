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

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  variant: 'primary',
  disabled: false,
  loading: false,
  icon: 'close',
  text: 'Click',
};
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  disabled: false,
  loading: false,
  text: 'Click',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  disabled: false,
  loading: false,
  text: 'Click',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  disabled: false,
  loading: false,
  text: 'Click',
  icon: 'close',
  iconProps: { color: 'borderPrimary' },
};

export const Loading = Template.bind({});
Loading.args = {
  disabled: false,
  loading: true,
  text: 'Click',
};

export const Disable = Template.bind({});
Disable.args = {
  disabled: true,
  loading: false,
  text: 'Click',
};
