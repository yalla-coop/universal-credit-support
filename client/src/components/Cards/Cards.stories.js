import { useState } from 'react';
import { Tips, Checklist, SectionCard } from '.';
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

const SectionCardExample = (args) => {
  return (
    <div style={{ width: '300px', margin: '20px' }}>
      <SectionCard {...args} m="2" />
    </div>
  );
};

export const sectionCard = SectionCardExample.bind({});
export const sectionCard2 = SectionCardExample.bind({});
export const sectionCard3 = SectionCardExample.bind({});
export const sectionCard4 = SectionCardExample.bind({});
export const sectionCard5 = SectionCardExample.bind({});

sectionCard.args = {
  id: 1,
  to: '/',
  text: 'Paying for housing',
};
sectionCard2.args = {
  id: 2,
  to: '/',
  text: 'Paying for my bills',
};
sectionCard3.args = {
  id: 3,
  to: '/',
  text: 'Paying for essentials (Food, transport, medication)',
};

sectionCard4.args = {
  id: 4,
  to: '/',
  text: 'Dealing with debts',
};

sectionCard5.args = {
  id: 5,
  to: '/',
  text: 'How to maximise my income',
};
