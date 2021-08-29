import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  TextWithIcon,
  Icon,
  Typography as T,
  Button,
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
import B from '../../constants/benefit-calculator';

import { Organisations } from '../../api-calls';

const { Row, Col } = Grid;
const { Tips, Checklist } = Cards;

const Step = () => {
  const [stuck, setStuck] = useState(false);
  const [benefitCalculator, setBenefitCalculator] = useState({
    benefitCalculatorLink: B.BENEFIT_CALCULATOR_LINK,
    benefitCalculatorLabel: B.BENEFIT_CALCULATOR_LABEL,
  });
  const params = useParams();
  const { lang } = useLang();
  const { steps: fullSteps, checkUncheckItem, markAsComplete } = useSteps();

  const step = fullSteps.find((s) => s.id === Number(params.id));

  const isTablet = useMediaQuery({
    query: `(max-width: ${breakpoints.tablet})`,
  });

  const formatLink = (link, type) => {
    if (type === types.linkTypes.PHONE) {
      return `tel:${link}`;
    }
    return link;
  };

  const checkItem = (itemTitle) => {
    const foundItem = step.checklist.find((c) => c.title === itemTitle);
    return foundItem?.isChecked;
  };

  useEffect(() => {
    // get benefit calculator
    async function fetchData() {
      const { data, error } = await Organisations.getBenefitCalculator({
        uniqueSlug: params.org,
      });
      if (error) {
        console.error(error);
      } else {
        setBenefitCalculator(data);
      }
    }

    if (params.org && step.id === 1) {
      fetchData();
    }
  }, [params.org, step.id]);

  return (
    <S.Container>
      <Row mb="8" mbM="8">
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
        <Row mb="8" mbM="6">
          <Col w={[4, 12, 6]}>
            <T.H1 weight="bold" mb="5">
              {step.pageTitle || step.title}
            </T.H1>
            <T.P color="neutralDark" mb="6" mbT="5">
              {step.pageDescription || step.description}
            </T.P>
          </Col>
          {step.topTip && (
            <Row inner>
              <Col w={[4, 12, 6]}>
                <Tips tips={[step.topTip]} ml="5" mlT="0" />
              </Col>
            </Row>
          )}
        </Row>

        {step.howLongDoesItTake && (
          <Row>
            <Col w={[4, 12, 6]}>
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

        <Row mt="8" mtM="7">
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
            <Row inner>
              {step.thingsYouWillNeed?.length > 0 ? (
                step.thingsYouWillNeed.map((item, index) => (
                  <Col w={[4, 12, 6]} key={index} isFirst={index === 0}>
                    {console.log(`item`, item)}
                    <Checklist
                      completed={checkItem(item.title)}
                      handleChange={() => checkUncheckItem(step.id, item.title)}
                      title={item.title}
                      description={item.description}
                      thisCanInclude={item.thisCanInclude}
                      tips={item.tips}
                      mb="4"
                    />
                  </Col>
                ))
              ) : (
                <Col w={[4, 12, 8]}>
                  <T.P color="neutralDark">
                    You don't need to provide any physical documents for this
                    step.
                  </T.P>
                </Col>
              )}
            </Row>
          </Col>
        </Row>

        {step.whatYouWillNeedToKnow?.length > 0 && (
          <Row mt="8" mtM="7">
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
              <Row inner>
                {step.whatYouWillNeedToKnow.map((item, index) => (
                  <Col w={[4, 12, 6]} key={index}>
                    <Checklist
                      completed={checkItem(item.title)}
                      handleChange={() => checkUncheckItem(step.id, item.title)}
                      title={item.title}
                      description={item.description}
                      thisCanInclude={item.thisCanInclude}
                      tips={item.tips}
                      mb="4"
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        )}

        {step.otherTips?.length > 0 && (
          <Row mt="3" mtM="1">
            <Tips tips={step.otherTips} startingColor={1} cols={[4, 6, 6]} />
          </Row>
        )}

        {step.id === 1 && (
          <>
            <Row mb="5" mt="8" mtM="7">
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
                  text={benefitCalculator.benefitCalculatorLabel}
                  to={benefitCalculator.benefitCalculatorLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  external
                />
              </Col>
            </Row>
          </>
        )}

        {step.whereDoYouNeedToGo?.link && (
          <>
            <Row mb="5" mt="8" mtM="7">
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
                markAsComplete(step.id);
              }}
            />
          </Col>
        </Row>
      </S.InnerContainer>
      <HelpButton
        uniqueSlug={params.org}
        parentState={stuck}
        parentFunc={() => setStuck(false)}
      />
    </S.Container>
  );
};

export default Step;
