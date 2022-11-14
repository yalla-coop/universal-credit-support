import React from 'react';

import HelpfulResources from '.';

export default {
  title: 'Common Components/HelpfulResources',
  component: HelpfulResources,
};

const Template = (args) => (
  <div
    style={{
      position: 'relative',
      width: '300px',
      height: '100vh',
    }}
  >
    <HelpfulResources {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  resources: [
    { label: 'Money Helper Budget Planner', link: 'https://www.figma.com/' },
    { label: 'Money Helper Budget Planner2', link: 'https://www.figma.com/' },
  ],
};
