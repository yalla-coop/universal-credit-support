import React from 'react';

import PageHeader from './index';

export default {
  title: 'Common Components/PageHeader',
  component: PageHeader,
  argTypes: {},
};

const Template = (args) => {
  return <PageHeader {...args} />;
};

export const PageHeaderExample = Template.bind({});
PageHeaderExample.args = {
  title: '*Paying for * housing', // should be markdown
  bgColor: 'secondaryMain',
  textColor: 'white',
  borderColor: 'white',
};

export const PageHeaderSecond = Template.bind({});
PageHeaderSecond.args = {
  title: 'asd **asdsd**', // should be markdown
  bgColor: 'error',
  textColor: 'neutralMain',
  borderColor: 'neutralMain',
};
