import { useState } from 'react';
import * as S from './style';
import { BasicInput, Textarea } from '../Inputs';
import * as T from '../Typography';
import TipInput from './TipInput';
import TextWithIcon from '../TextWithIcon';

const Action = ({ topic, setTopic, topicIndex, setTopics }) => {
  const [expanded, setExpanded] = useState(false);

  const handleSetTips = (tips) => {
    setTopic({ ...topic, tips });
  };

  return (
    <S.Wrapper>
      <T.H2 mb="4" color="neutralMain">
        Topic {1 + (topicIndex || 0)}
      </T.H2>
      <S.Section mb="3">
        <S.TopSection>
          <BasicInput
            name="title"
            placeholder="Type title here..."
            label="Title"
            value={topic.title}
            handleChange={(value) => setTopic({ ...topic, title: value })}
          />

          {!expanded && (
            <TextWithIcon
              text={expanded ? 'See less' : 'See more'}
              icon="circleArrow"
              isButton
              mt="4"
              color="neutralDark"
              iconColor="neutralDark"
              direction={expanded ? 'up' : 'down'}
              handleClick={() => setExpanded(!expanded)}
              mb={'5'}
            />
          )}
        </S.TopSection>
        {expanded && (
          <S.CollapseContent>
            <Textarea
              label="Description"
              value={topic.description}
              rows="3"
              handleChange={(value) =>
                setTopic({ ...topic, description: value })
              }
            />
            {topic?.tips?.length > 0 &&
              topic.tips.map((t, index) => {
                return (
                  <TipInput
                    key={t + index}
                    tip={t}
                    tips={topic.tips}
                    setTips={handleSetTips}
                    index={index}
                  />
                );
              })}
            {topic?.tips?.length < 2 && (
              <TextWithIcon
                text="Add another tip"
                icon="add"
                isButton
                mt="4"
                iconColor="primaryDark"
                handleClick={() => {
                  handleSetTips([...topic.tips, { content: '' }]);
                }}
              />
            )}
          </S.CollapseContent>
        )}
      </S.Section>
      <TextWithIcon
        text="Remove"
        icon="close"
        weight="medium"
        pointer
        isButton
        mt="4"
        iconColor="primaryDark"
        handleClick={() =>
          setTopics((old) => {
            return old.filter((topic, idx) => {
              return idx !== topicIndex;
            });
          })
        }
        mb={'5'}
        ml="5"
        ai="left"
      />
    </S.Wrapper>
  );
};

export default Action;
