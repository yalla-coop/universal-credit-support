import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GeneralPaddingSection from '../../components/Layout/GeneralPaddingSection';
import PageHeader from '../../components/PageHeader';
import * as S from './style';
import { Sections } from './../../api-calls';
import { TopicCard } from './../../components/Cards';
import useTopics from './useTopics';
import StillNeedHelp from './../../components/StillNeedHelp';

// Uncomment to test language translation
// import { common } from '../../constants';

const Section = () => {
  const { i18n, t } = useTranslation();
  const { language: lng } = i18n;
  const { id } = useParams();
  const [sectionData, setSectionData] = useState({});
  const { topics, toggleMark } = useTopics(id, lng);

  useEffect(() => {
    const fetchSectionData = async () => {
      const { data, error } = await Sections.getSectionById({
        id,
      });
      if (error) {
        // message.error('Something went wrong, please try again later');
      } else {
        setSectionData(data);
      }
    };

    fetchSectionData();
  }, [id]);

  const { title, parentSectionTitle } = sectionData;
  const pageTitle = parentSectionTitle
    ? `${parentSectionTitle.replace(/\*\*/g, '')} **${title}**`
    : title;

  i18n.addResourceBundle(lng, 'topicNS', {
    topics,
  });

  const _topics = t('topics', { ns: 'topicNS', returnObjects: true });

  return (
    <S.Container>
      <PageHeader title={pageTitle} />
      <GeneralPaddingSection>
        <S.Content>
          <S.Topics>
            {_topics.map(({ id, content }, i) => (
              <TopicCard
                topicIndex={i}
                key={id}
                title={content.title}
                description={content.content}
                tips={[content.tip1, content.tip2]}
                toggleMark={() => toggleMark(id)}
                resources={content.resources}
              />
            ))}
          </S.Topics>
          <S.HelpSection>
            <StillNeedHelp />
          </S.HelpSection>
        </S.Content>
      </GeneralPaddingSection>
    </S.Container>
  );
};

export default Section;
