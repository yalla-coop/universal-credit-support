import { useState } from 'react';
import { Tips, Checklist } from '.';
import * as T from '../Typography';

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
  startingColor: 0,
};

const TipsExample2 = (args) => (
  <div style={{ width: '300px' }}>
    <Tips {...args} m="2" />
  </div>
);

export const tips2 = TipsExample2.bind({});
tips2.args = {
  tips: [
    <a href="mailto:ucdigital@hyde-housing.co.uk">
      <T.H3 color="neutralMain">
        Interested in specific statistics? Get in touch with
        ucdigital@hyde-housing.co.uk
      </T.H3>
    </a>,
  ],
  startingColor: 3,
};

const ChecklistExamples = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ width: '300px', margin: '20px' }}>
      <Checklist
        {...args}
        m="2"
        handleChange={() => setChecked(!checked)}
        completed={checked}
      />
    </div>
  );
};

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
