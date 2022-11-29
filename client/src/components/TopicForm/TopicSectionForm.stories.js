import { useState } from 'react';
import ActionCard from '.';
import * as T from '../Typography';
import TextWithIcon from '../TextWithIcon';
import { BasicInput } from '../Inputs';
import { Col, Row } from '../Grid';

export default {
  title: 'Common Components/TopicSectionForm',
  argTypes: {},
};

const ResourcesSection = ({ resource, setResources, index }) => {
  return (
    <Row mb="4">
      <Col w={[4, 4, 4]}>
        <BasicInput
          label="Resource link"
          value={resource.link}
          handleChange={(value) =>
            setResources((old) =>
              old.map((r, idx) => (idx === index ? { ...r, link: value } : r))
            )
          }
          placeholder="Type/paste link here..."
          helper="Enter your preferred resource link"
        />
      </Col>
      <Col w={[4, 4, 4]}>
        <BasicInput
          label="Resource label"
          value={resource.label}
          handleChange={(value) =>
            setResources((old) =>
              old.map((r, idx) => (idx === index ? { ...r, label: value } : r))
            )
          }
          placeholder="e.g. Our budgeting tool"
          helper="Enter your preferred button label here"
        />
      </Col>
    </Row>
  );
};

const TopicForm = ({ topic, topicIndex, setTopics }) => {
  const [resources, setResources] = useState([{ link: '', label: '' }]);
  const handleUpdateTopic = (updatedTopic) => {
    setTopics((old) =>
      old.map((t, idx) => (idx === topicIndex ? updatedTopic : t))
    );
  };

  return (
    <>
      <Row>
        <Col w={[4, 4, 4]}>
          <ActionCard
            topic={topic}
            topicIndex={topicIndex}
            setTopic={handleUpdateTopic}
            setTopics={setTopics}
          />
        </Col>
      </Row>
      <Row mb="4">
        <Col w={[4, 4, 4]}>
          <T.H3 color="neutralMain">Helpful resources</T.H3>
        </Col>
      </Row>
      {resources.map((r, index) => (
        <ResourcesSection
          resource={r}
          setResources={setResources}
          index={index}
        />
      ))}
      <Row>
        <Col w={[4, 4, 4]}>
          <TextWithIcon
            text="Add another resource"
            icon="add"
            isButton
            mt="9px"
            iconColor="primaryDark"
            handleClick={() =>
              setResources((old) => [...old, { link: '', value: '' }])
            }
            mb={'57px'}
          />
        </Col>
      </Row>
      <Row>
        <Col w={[4, 8, 8]}>
          <div
            style={{ height: 2, width: '100%', background: '#D9D6CC', mb: 41 }}
          />
        </Col>
      </Row>
    </>
  );
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
        <TopicForm
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
            iconColor="primaryDark"
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
