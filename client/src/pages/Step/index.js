import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  TextWithIcon,
  Icon,
  Typography as T,
  Button,
  Inputs,
  Grid,
  HelpButton,
  Cards,
} from '../../components';
import { useSteps } from '../../context/steps';
import { useLang } from '../../context/lang';
import { t } from '../../helpers';
import { navRoutes as n, types } from '../../constants';
import { ReactComponent as MobileLogo } from '../../components/assets/MobileLogo.svg';
import { ReactComponent as DesktopLogo } from '../../components/assets/DesktopLogo.svg';
import { breakpoints } from '../../theme';

import * as S from './style';
import { GENERAL } from '../../constants/nav-routes';

const { Checkbox } = Inputs;
const { Row, Col } = Grid;
const { Tips, Checklist } = Cards;

const Step = () => {
  const [checklist, setChecklist] = useState({
    thingsYouWillNeed: [],
    whatYouWillNeedToKnow: [],
  });
  const [loaded, setLoaded] = useState(false);
  const [stuck, setStuck] = useState(false);

  const params = useParams();
  const { lang } = useLang();
  const { steps: fullSteps, checkUncheckItem, setJustCompletedId } = useSteps();

  const step = fullSteps.find((s) => s.id === params.id);
  const desktopColWidth = step.checkListItems.length > 5 ? 6 : 12;
  const isTablet = useMediaQuery({
    query: `(max-width: ${breakpoints.tablet})`,
  });

  const formatLink = (link, type) => {
    if (type === types.linkTypes.PHONE) {
      return `tel:${link}`;
    }
    return link;
  };

  useEffect(() => {
    // TO DO - api to get data from server
    const stepsObj = step?.checkListItems?.reduce((acc, curr) => {
      const { stage } = curr;
      if (!acc[stage]) {
        acc[stage] = [curr];
      } else {
        acc[stage].push(curr);
      }
      return acc;
    }, {});
    setChecklist(stepsObj);
    setLoaded(true);
  }, [fullSteps]);

  if (!loaded) return <>Loading</>;

  return (
    <S.Container>
      <Row mb="8" mbM="5">
        <Col w={[4, 12, 12]}>
          <S.PageHead>
            <S.Link to={GENERAL.HOME}>
              {isTablet ? <MobileLogo /> : <DesktopLogo />}
            </S.Link>
            <S.Link to={GENERAL.HOME}>
              <Icon icon="close" width={16} height={16} />
            </S.Link>
          </S.PageHead>
        </Col>
      </Row>
      <S.InnerContainer>
        <Row mb="8" mbM="7">
          <Col w={[4, 12, 6]}>
            <T.H1 weight="bold" mb="5">
              {step.pageTitle || step.title}
            </T.H1>
            <T.P color="neutralDark" mbT="5">
              {step.pageDescription || step.description}
            </T.P>
          </Col>
          <Col w={[4, 12, 6]}>
            <Tips tips={[step.topTip]} ml="5" mlT="0" />
          </Col>
        </Row>

        {step.howLongDoesItTake && (
          <Row mb="8" mbM="7">
            <Col w={[4, 6, 6]}>
              <S.SectionHeader mb="2">
                <Icon
                  icon="time"
                  width={24}
                  height={24}
                  color="primaryMain"
                  mr="2"
                />
                <T.H2 color="neutralMain">How long does it take?</T.H2>
              </S.SectionHeader>
              <T.P color="neutralDark">
                {step.howLongDoesItTake.timeRangeText}
              </T.P>
            </Col>
          </Row>
        )}

        <Row mb="8" mbM="7">
          <Col w={[4, 12, 12]}>
            <S.SectionHeader mb="5">
              <Icon
                icon="time"
                width={24}
                height={24}
                color="primaryMain"
                mr="2"
              />
              <T.H2 color="neutralMain">Things you'll need</T.H2>
            </S.SectionHeader>
            {checklist.thingsYouWillNeed?.length > 0 ? (
              checklist.thingsYouWillNeed.map((item) => (
                <Col w={[4, 12, desktopColWidth]}>
                  <Checkbox
                    key={item.title}
                    checked={item.isChecked}
                    handleChange={() => checkUncheckItem(step.name, item.title)}
                    label={item.title}
                    mb="5"
                  />
                </Col>
              ))
            ) : (
              <T.P color="neutralDark">
                You don't need to provide any physical documents for this step.
              </T.P>
            )}
          </Col>
        </Row>

        {checklist.whatYouWillNeedToKnow?.length > 0 && (
          <Row mb="8" mbM="7">
            <Col w={[4, 12, 12]} ai="flex-start">
              <S.SectionHeader mb="5">
                <Icon
                  icon="checklist2"
                  width={24}
                  height={24}
                  color="primaryMain"
                  mr="2"
                />
                <T.H2 color="neutralMain">What you'll need to know</T.H2>
              </S.SectionHeader>
              {checklist.whatYouWillNeedToKnow.map((item, index) => (
                <Col w={[4, 12, 6]} key={index}>
                  <Checklist
                    completed={item.isChecked}
                    handleChange={() => checkUncheckItem(step.name, item.title)}
                    title={item.title}
                    description={item.description}
                    things={item.thisCanInclude}
                    tips={item.tips}
                    mb="4"
                  />
                </Col>
              ))}
            </Col>
          </Row>
        )}

        {step.whereDoYouNeedToGo?.link && (
          <>
            <Row mb="5">
              <Col w={[4, 12, 6]} ai="flex-start">
                <S.SectionHeader mb="5">
                  <Icon
                    icon="compass"
                    width={24}
                    height={24}
                    color="primaryMain"
                    mr="2"
                  />
                  <T.H2 color="neutralMain">Where do you need to go?</T.H2>
                </S.SectionHeader>
                <T.P color="neutralDark">
                  Remember to come back here once you're done so you can mark
                  this step as complete and see what to do next
                </T.P>
              </Col>
            </Row>
            <Row>
              <Col w={[4, 12, 6]}>
                <Button
                  variant="primary"
                  text={step.whereDoYouNeedToGo.title}
                  to={formatLink(
                    step.whereDoYouNeedToGo.link,
                    step.whereDoYouNeedToGo.type
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  external
                />
              </Col>
            </Row>
          </>
        )}

        <Row>
          <Col w={[4, 12, 6]} mt="8" mtM="7" mb="5">
            <TextWithIcon
              text={t('callUsLinkText', lang)}
              isButton
              handleClick={() => setStuck(true)}
              underline
              iconColor="primaryMain"
              weight="medium"
              mr="3"
              jc="center"
            />
          </Col>
        </Row>

        <Row>
          <Col w={[4, 12, 6]} mt="6" mb="7">
            <Button
              variant="secondary"
              text="Mark as complete"
              to={n.GENERAL.HOME}
              handleClick={() => {
                setJustCompletedId(step.id);
              }}
            />
          </Col>
        </Row>
      </S.InnerContainer>
      <HelpButton parentState={stuck} parentFunc={() => setStuck(false)} />
    </S.Container>
  );
};

export default Step;
