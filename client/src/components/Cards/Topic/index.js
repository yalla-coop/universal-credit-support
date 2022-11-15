import { useState } from 'react';
import * as S from './style';
import * as T from '../../Typography';
import TextWithIcon from '../../TextWithIcon';
import Tips from '../Tips';
import Icon from '../../Icon';
import HelpfulResources from '../../HelpfulResources';

const TopicCard = ({
  title,
  description,
  tips,
  resources,
  marked,
  toggleMark,
  topicIndex,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <S.Section mb="3">
        <S.TopSection>
          <S.MarkButton onClick={toggleMark}>
            <S.IconWrapper>
              <Icon
                color={marked ? 'secondaryMain' : 'secondaryLight'}
                icon="bookMark"
                pointer
                mr="6px"
              />
              <T.H3>{title}</T.H3>
            </S.IconWrapper>
          </S.MarkButton>

          {(description || tips?.length > 0) && (
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
              ml="6"
            />
          )}
        </S.TopSection>
        {expanded && description && (
          <S.ExtraDetails>
            {description && <T.P color="neutralMain">{description}</T.P>}
          </S.ExtraDetails>
        )}
      </S.Section>
      {expanded && tips?.length > 0 && (
        <Tips tips={tips} mb="5" inner startingColor={topicIndex} />
      )}
      {expanded && resources?.length > 0 && (
        <HelpfulResources resources={resources} mb="5" mt="6" />
      )}
    </>
  );
};

export default TopicCard;
