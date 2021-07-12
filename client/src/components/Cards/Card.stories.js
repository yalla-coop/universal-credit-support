import Card from '.';

export default {
  title: 'Common Components/Card',
  component: Card,
};

const Template = (args) => (
  <div style={{ margin: '200px auto' }}>
    <Card {...args} m="2" />
  </div>
);

export const WithTick = Template.bind({});

WithTick.args = {
  content:
    'You can check your eligibility to claim Universal Credit with an eligibility calculator.',
  withTick: true,
  title: 'Check Eligibility',
};

export const Primary = Template.bind({});

Primary.args = {
  content:
    'You can check your eligibility to claim Universal Credit with an eligibility calculator.',

  title: 'Check Eligibility',
};

export const Secondary = Template.bind({});

Secondary.args = {
  content:
    'You can check your eligibility to claim Universal Credit with an eligibility calculator.',
  variant: 'secondary',
  title: 'Check Eligibility',
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  content:
    'You can check your eligibility to claim Universal Credit with an eligibility calculator.',
  variant: 'tertiary',
  title: 'Check Eligibility',
};

export const WithTickRight = Template.bind({});

WithTickRight.args = {
  content:
    'You can check your eligibility to claim Universal Credit with an eligibility calculator.',
  withTick: true,
  title: 'Check Eligibility',
  direction: 'right',
};

export const PrimaryRight = Template.bind({});

PrimaryRight.args = {
  content:
    'You can check your eligibility to claim Universal Credit with an eligibility calculator.',
  direction: 'right',
  title: 'Check Eligibility',
};

export const SecondaryRight = Template.bind({});

SecondaryRight.args = {
  content:
    'You can check your eligibility to claim Universal Credit with an eligibility calculator.',
  variant: 'secondary',
  title: 'Check Eligibility',
  direction: 'right',
};

export const TertiaryRight = Template.bind({});

TertiaryRight.args = {
  content:
    'You can check your eligibility to claim Universal Credit with an eligibility calculator.',
  variant: 'tertiary',
  title: 'Check Eligibility',
  direction: 'right',
};
