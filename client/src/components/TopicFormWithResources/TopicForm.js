import { useState } from 'react';
import * as S from './style';
import { BasicInput, Textarea } from '../Inputs';
import * as T from '../Typography';
import TipInput from './TipInput';
import TextWithIcon from '../TextWithIcon';
import { useTranslation } from 'react-i18next';
import { common } from '../../constants';

const TopicForm = ({
  topic,
  setTopic,
  topicIndex,
  removeTopic,
  errors = {},
}) => {
  const [expanded, setExpanded] = useState(false);

  const { t } = useTranslation();

  const addATip = t('common.buttons.addATip', common.buttons.addATip);
  const addAnotherTip = t(
    'common.buttons.addAnotherTip',
    common.buttons.addAnotherTip
  );
  const seeMore = t('common.buttons.seeMore', common.buttons.seeMore);
  const seeLess = t('common.buttons.seeLess', common.buttons.seeLess);
  const seeMoreOrLess = expanded ? seeLess : seeMore;

  const setTip = (value, id) => {
    const tips = topic.tips.map((t) => {
      if (t.id === id) return { ...t, content: value };
      return t;
    });
    setTopic({ ...topic, tips });
  };

  const removeTip = (id) => {
    const tips = topic.tips.filter((t) => t.id !== id);
    setTopic({ ...topic, tips });
  };

  const addTip = () => {
    const largestTipId = topic.tips.reduce((acc, curr) => {
      if (curr.id > acc) {
        return curr.id;
      }
      return acc;
    }, 0);
    const tips = [...topic.tips, { content: '', id: largestTipId + 1 }];
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
            error={errors?.title}
          />

          {!expanded && (
            <TextWithIcon
              text={seeMoreOrLess}
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
              value={topic.content}
              handleChange={(value) => setTopic({ ...topic, content: value })}
              error={errors?.content}
            />
            {topic?.tips?.length > 0 &&
              topic.tips.map((t, index) => {
                return (
                  <TipInput
                    content={t.content}
                    id={t.id}
                    setTip={setTip}
                    removeTip={removeTip}
                    key={t.id}
                    error={errors?.tip1}
                  />
                );
              })}
            {topic?.tips?.length < 2 && (
              <TextWithIcon
                text={topic?.tips?.length > 0 ? addAnotherTip : addATip}
                icon="add"
                isButton
                mt="4"
                iconColor="primaryDark"
                handleClick={addTip}
                error={errors?.tip1}
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
        handleClick={() => removeTopic(topic.id)}
        mb={'5'}
        ml="5"
        ai="center"
      />
    </S.Wrapper>
  );
};

export default TopicForm;
