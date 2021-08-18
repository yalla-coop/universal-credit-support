import { Tips, Checklist } from '.';

export default {
  title: 'Common Components/Cards',
  argTypes: {},
};

const TipsExample = (args) => (
  <div style={{ width: '300px' }}>
    <Tips {...args} m="2" />
  </div>
);

export const tips = TipsExample.bind({});
tips.args = {
  tips: ['tip 1', 'tip 2', 'tip 3', 'tip 4', 'tip 5'],
};

const ChecklistExamples = (args) => (
  <div style={{ width: '300px' }}>
    <Checklist {...args} m="2" />
  </div>
);

export const checklist = ChecklistExamples.bind({});
checklist.args = {
  title: 'Income details',
  name: 'incomeDetails',
  description: 'Some extra description can go here from CMS',
  things: [
    'Salaries from an employer or self-employment',
    'Other Benefits you and/or your partner already receive',
    'Private pensions',
  ],
  tips: [
    'Please be mindful of accessibility and testing your colours work. You can find more information here',
    'Tips 2',
  ],
};
