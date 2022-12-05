import { useState } from 'react';
import * as S from './style';
import * as T from '../../Typography';
import TextWithIcon from '../../TextWithIcon';
import Tips from '../Tips';
import Icon from '../../Icon';
import HelpfulResources from '../../HelpfulResources';
import { useTranslation } from 'react-i18next';
import { common } from '../../../constants';

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

  const { t } = useTranslation();

  const seeMore = t('common.buttons.seeMore', common.buttons.seeMore);
  const seeLess = t('common.buttons.seeLess', common.buttons.seeLess);
  const seeMoreOrLess = expanded ? seeLess : seeMore;

  return (
    <>
      <S.Section mb="3">
        <S.TopSection>
          <S.MarkButton>
            <S.IconWrapper onClick={toggleMark}>
              <Icon
                color={marked ? 'secondaryMain' : 'secondaryLight'}
                icon="bookMark"
                pointer
                mr="6px"
              />
            </S.IconWrapper>
            <T.H3>{title}</T.H3>
          </S.MarkButton>

          {(description || tips?.length > 0) && (
            <TextWithIcon
              text={seeMoreOrLess}
              isButton
              mt="4"
              color="neutralDark"
              handleClick={() => setExpanded(!expanded)}
              mb={'5'}
              ml="6"
              iconProps={{
                color: 'neutralDark',
                icon: 'circleArrow',
                direction: expanded ? 'up' : 'down',
              }}
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
        <HelpfulResources resources={resources} mb="6" mt="6" />
      )}
    </>
  );
};

export default TopicCard;
