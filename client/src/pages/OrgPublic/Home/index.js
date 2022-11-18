import { useState, useEffect } from 'react';
import { message } from 'antd';
import { generatePath } from 'react-router-dom';
import { Sections } from '../../../api-calls';
import { usePublicOrg } from '../../../context/public-org';
import {
  Cards,
  Typography as T,
  TextWithIcon,
  Grid,
  Button,
} from '../../../components';
import { navRoutes } from '../../../constants';
import LandingContent from './LandingContent';

import HelpButton from '../../../components/HelpButton';

import * as S from './style';
const { Col, Row } = Grid;

const Home = () => {
  const [stuck, setStuck] = useState(false);
  const [cardsData, setCardsData] = useState([]);
  const { publicOrg } = usePublicOrg();
  const uniqueSlug = publicOrg?.uniqueSlug;

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      const hideMessage = message.loading('Loading...');
      const { data, error } = await Sections.getSections({
        uniqueSlug,
        forPublic: true,
      });
      if (mounted) {
        if (error) {
          message.error('Something went wrong, please try again later');
        } else {
          setCardsData(data);
        }
        hideMessage();
      }
    }

    fetchData();
    return () => {
      mounted = false;
    };
  }, [uniqueSlug]);

  return (
    <S.Container>
      <LandingContent />
      <S.Section>
        <S.CardsWrapper>
          {cardsData.map((item) => {
            return (
              <Cards.SectionCard
                key={item.id}
                id={item.id}
                text={item.title.replaceAll('*', '')}
                to={
                  item.hasSubSections
                    ? generatePath(navRoutes.PUBLIC_ORG.SUBSECTIONS, {
                        uniqueSlug,
                        id: item.id,
                      })
                    : generatePath(navRoutes.PUBLIC_ORG.SECTION, {
                        uniqueSlug,
                        id: item.id,
                      })
                }
                mb={2}
                mbM={'0'}
              />
            );
          })}
        </S.CardsWrapper>
      </S.Section>
      <S.FullSection>
        <S.NeedHelpWrapper>
          <T.H2 color="neutralMain" ta="center" taM="left">
            Need help with budgeting?
          </T.H2>
          <T.P ta="center" mt="4" mb="3" taM="left" color="neutralDark">
            You know how much is going in and out but if you need a hand, we can
            help you work it out.
          </T.P>
          <S.ReadMoreLink
            to={generatePath(navRoutes.PUBLIC_ORG.BUDGETING, {
              uniqueSlug,
            })}
          >
            <TextWithIcon
              size="large"
              bgColor="neutralLight"
              text="Read more"
              icon="forwardArrow"
              iconColor="tertiaryDark"
              jc="center"
              jcT="flex-start"
              mr="6px"
              isText
            />
          </S.ReadMoreLink>
        </S.NeedHelpWrapper>
      </S.FullSection>
      <Row jc="center" jcM="flex-start">
        <Col w={[4, 6, 4]} jc="center" jcM="flex-start" mt="8" mtM="6" mb="0">
          <S.ButtonsContainer>
            <T.H2
              id="buttons_text"
              ta="center"
              taM="left"
              color="neutralMain"
              mb="4"
            >
              Feeling stressed or overwhelmed
            </T.H2>
            <Button
              variant="primary"
              text="See advice"
              mb="6"
              to={generatePath(navRoutes.PUBLIC_ORG.MENTAL_HEALTH, {
                uniqueSlug,
              })}
            />
            <TextWithIcon
              text="Stuck? Talk to someone"
              isButton
              handleClick={() => setStuck(true)}
              underline
              iconColor="primaryMain"
              weight="medium"
              mr="3"
              jc="center"
            />
          </S.ButtonsContainer>
        </Col>
      </Row>

      <HelpButton parentState={stuck} parentFunc={() => setStuck(false)} />
    </S.Container>
  );
};

export default Home;
