import TopicForm from './TopicForm';
import * as T from '../Typography';
import TextWithIcon from '../TextWithIcon';
import { Col, Row } from '../Grid';
import ResourcesSection from './ResourcesSection';

const TopicFormWithResources = ({
  topic,
  topicIndex,
  setTopics,
  removeTopic,
  errors = {},
}) => {
  const setTopic = (topic) => {
    setTopics((prev) => {
      return prev.map((t) => {
        if (t.id === topic.id) return topic;
        return t;
      });
    });
  };
  const setResource = (resource, id) => {
    setTopic({
      ...topic,
      resources: topic.resources.map((r) => {
        if (r.id === id) return resource;
        return r;
      }),
    });
  };

  const addResource = () => {
    setTopics((_topics) => {
      const largestResourceId = topic.resources.reduce((acc, curr) => {
        if (curr.id > acc) {
          return curr.id;
        }
        return acc;
      }, 0);

      return _topics.map((t) => {
        if (t.id === topic.id) {
          return {
            ...t,
            resources: [
              ...t.resources,
              { url: '', label: '', id: largestResourceId + 1 },
            ],
          };
        }
        return t;
      });
    });
  };

  const handleRemoveResource = (id) => {
    setTopics((_topics) => {
      return _topics.map((t) => {
        if (t.id === topic.id) {
          return {
            ...t,
            resources: t.resources.filter((r) => r.id !== id),
          };
        }
        return t;
      });
    });
  };

  return (
    <>
      <Row>
        <Col w={[4, 12, 6]}>
          <TopicForm
            topic={topic}
            topicIndex={topicIndex}
            removeTopic={removeTopic}
            setTopic={setTopic}
            errors={errors}
          />
        </Col>
      </Row>
      <Row mb="4">
        <Col w={[4, 12, 6]}>
          <T.H3 color="neutralMain">Helpful resources</T.H3>
        </Col>
      </Row>
      {topic?.resources?.map((r, index) => (
        <ResourcesSection
          key={r.id}
          resource={r}
          setResource={(resource) => setResource(resource, r.id)}
          removeResource={() => handleRemoveResource(r.id)}
          errors={{
            url: errors[`resources[${index}].url`],
            label: errors[`resources[${index}].label`],
          }}
        />
      ))}
      <Row>
        <Col w={[4, 12, 6]}>
          <TextWithIcon
            text="Add another resource"
            icon="add"
            isButton
            mt="9px"
            iconColor="primaryMain"
            handleClick={addResource}
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

export default TopicFormWithResources;
