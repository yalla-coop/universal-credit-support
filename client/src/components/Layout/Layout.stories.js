import React from 'react';

import Layout from '.';
import Example from '../../pages/General/Example';
export default {
  title: 'Common Components/Layout',
  component: Layout,
  argTypes: {
    layout: {
      options: ['info', 'general', 'onboarding'],
    },
  },
  image: {
    options: ['hands', 'welcome2', 'welcome3', 'welcome4', 'welcome5'],
  },
};

const Template = (args) => (
  <Layout {...args}>
    <Example />
  </Layout>
);

export const OnboardingLayout = Template.bind({});
OnboardingLayout.args = {
  layout: 'onboarding',
  goBack: false,
};

export const InfoLayout = Template.bind({});
InfoLayout.args = {
  layout: 'info',
  image: 'hands',
  goBack: false,
};

export const GeneralLayout = Template.bind({});
GeneralLayout.args = {
  layout: 'general',
  goBack: false,
};
