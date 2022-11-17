import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GeneralPaddingSection from '../../../components/Layout/GeneralPaddingSection';
import GoBack from '../../../components/GoBack';
import { contentColors } from '../../../constants';

import PageHeader from '../../../components/PageHeader';
import * as S from './style';
import { Sections } from '../../../api-calls';
import { usePublicOrg } from '../../../context/public-org';
import { TopicCard } from '../../../components/Cards';
import useTopics from './useTopics';
import StillNeedHelp from '../../../components/StillNeedHelp';
import { navRoutes } from '../../../constants';
import { message } from 'antd';

const Section = () => {
  const { publicOrg } = usePublicOrg();
  const { id } = useParams();
  const navigate = useNavigate();

  const [sectionData, setSectionData] = useState({});
  const { topics, toggleMark } = useTopics(id, publicOrg?.resources);

  useEffect(() => {
    const fetchSectionData = async () => {
      const { data, error } = await Sections.getSectionById({
        id,
      });
      if (error) {
        if (error.statusCode === 404) {
          return navigate(navRoutes.GENERAL.NOT_FOUND);
        }
        message.error('Something went wrong, please try again later');
      } else {
        setSectionData(data);
      }
    };

    fetchSectionData();
  }, [id, navigate]);

  const { title, parentSectionTitle } = sectionData;
  const pageTitle = parentSectionTitle
    ? `${parentSectionTitle.replace(/\*\*/g, '')} **${title}**`
    : title;

  const stillNeedHelp = publicOrg?.resources?.find(
    (resource) => resource.key === 'STILL_NEED_HELP'
  );

  const colors = contentColors[id] || contentColors[1];
  return (
    <S.Container>
      <PageHeader
        title={pageTitle}
        bgColor={colors.bg}
        icon={colors.icon}
        iconColor={colors.iconColor}
        borderColor={colors.borderColor}
        textColor={colors.textColor}
      />
      <GeneralPaddingSection>
        <S.Content>
          <S.Topics>
            {topics.map(({ id, marked, content }, i) => (
              <TopicCard
                topicIndex={i}
                key={id}
                title={content.title}
                description={content.content}
                tips={[content.tip1, content.tip2]}
                toggleMark={() => toggleMark(id)}
                marked={marked}
                resources={content.resources}
              />
            ))}
          </S.Topics>
          <S.HelpSection>
            <StillNeedHelp
              name={stillNeedHelp?.label}
              phoneNumber={stillNeedHelp?.value}
            />
            <GoBack mt={4} />
          </S.HelpSection>
        </S.Content>
      </GeneralPaddingSection>
    </S.Container>
  );
};

export default Section;
