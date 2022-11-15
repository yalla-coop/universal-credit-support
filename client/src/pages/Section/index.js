import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import B from '../../constants/benefit-calculator';
import GeneralPaddingSection from '../../components/Layout/GeneralPaddingSection';
import {
  TextWithIcon,
  Icon,
  Typography as T,
  Button,
  Grid,
  HelpButton,
  Cards,
  OrganisationLogo,
} from '../../components';
import { useLang } from '../../context/lang';
import { t } from '../../helpers';
import { navRoutes as n, types } from '../../constants';
import PageHeader from '../../components/PageHeader';
import * as S from './style';
import { Sections } from './../../api-calls';
import { usePublicOrg } from '../../context/public-org';
import { TopicCard } from './../../components/Cards';
import useTopics from './useTopics';

const Section = () => {
  const [stuck, setStuck] = useState(false);
  const { publicOrg } = usePublicOrg();
  const { id } = useParams();
  const { lang } = useLang();
  const navigate = useNavigate();
  const [sectionData, setSectionData] = useState({});
  const { topics, toggleMark } = useTopics(id);

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

  const formatLink = (link, type) => {
    if (type === types.linkTypes.PHONE) {
      return `tel:${link}`;
    }
    return link;
  };

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
          <S.HelpSection>TTTTT</S.HelpSection>
        </S.Content>
      </GeneralPaddingSection>
    </S.Container>
  );
};

export default Section;
