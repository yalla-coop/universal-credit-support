import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GeneralPaddingSection from '../../components/Layout/GeneralPaddingSection';
import PageHeader from '../../components/PageHeader';
import * as S from './style';
import { Sections } from './../../api-calls';
import { TopicCard } from './../../components/Cards';
import useTopics from './useTopics';
import StillNeedHelp from './../../components/StillNeedHelp';
import { useTranslation, Trans } from 'react-i18next';

const Section = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const [sectionData, setSectionData] = useState({});
  const { topics, toggleMark } = useTopics(id, lang);

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

  return (
    <S.Container>
      <PageHeader title={pageTitle} />
      <GeneralPaddingSection>
        <S.Content>
          <S.Topics>
            {topics.map(({ id, contentI18n }, i) => (
              <TopicCard
                topicIndex={i}
                key={id}
                title={contentI18n.title}
                description={contentI18n.content}
                tips={[contentI18n.tip1, contentI18n.tip2]}
                toggleMark={() => toggleMark(id)}
                resources={contentI18n.resources}
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
