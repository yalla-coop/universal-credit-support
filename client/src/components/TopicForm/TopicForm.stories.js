import { useState } from 'react';

import TopicForm from '.';

export default {
  title: 'Common Components/TopicForm',
  argTypes: {},
};

const TopicFormExamples = (args) => {
  const [topic, setTopic] = useState({
    title: '',
    description: '',
    tips: [{ content: '', key: Math.random() * 1000 }],
  });

  return (
    <div style={{ width: '300px', margin: '20px' }}>
      <TopicForm {...args} m="2" topic={topic} setTopic={setTopic} />
    </div>
  );
};

export const actionCard = TopicFormExamples.bind({});
TopicFormExamples.args = {};
