import { useState } from 'react';
import TopicFormWithResources from '.';

import TextWithIcon from '../TextWithIcon';
import { Col, Row } from '../Grid';

export default {
  title: 'Common Components/TopicSectionForm',
  argTypes: {},
};

const TopicSectionFormExamples = (args) => {
  const [topics, setTopics] = useState([
    {
      title: '',
      resources: [{ link: '', label: '' }],
      tips: [{ content: '', key: Math.random() * 1000 }],
      key: Math.random() * 1000,
    },
  ]);

  return (
    <>
      {topics.map((p, topicIndex) => (
        <TopicFormWithResources
          topic={p}
          setTopics={setTopics}
          topicIndex={topicIndex}
          key={p.key}
        />
      ))}
      <Row>
        <Col w={[4, 4, 4]}>
          <TextWithIcon
            text="Add another topic"
            icon="add"
            isButton
            mt="33px"
            iconColor="primaryMain"
            handleClick={() =>
              setTopics((old) => [
                ...old,
                {
                  title: '',
                  resources: [{ link: '', label: '' }],
                  tips: [{ content: '', key: Math.random() * 1000 }],
                  key: Math.random() * 1000,
                },
              ])
            }
            mb={'57px'}
          />
        </Col>
      </Row>
    </>
  );
};

export const actionsSection = TopicSectionFormExamples.bind({});
TopicSectionFormExamples.args = {};
