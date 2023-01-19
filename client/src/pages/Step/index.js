import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import B from '../../constants/benefit-calculator';
import { common } from '../../constants';
import { useTranslation } from 'react-i18next';

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
import { useSteps } from '../../context/steps';
import { navRoutes as n, types } from '../../constants';

import * as S from './style';

import { usePublicOrg } from '../../context/public-org';

const { Row, Col } = Grid;
const { Tips, Checklist } = Cards;

const Step = () => {
  const [stuck, setStuck] = useState(false);
  const { publicOrg } = usePublicOrg();
  const params = useParams();
  const navigate = useNavigate();
  const { steps: fullSteps, checkUncheckItem, markAsComplete } = useSteps();
  const { t } = useTranslation();

  const step = fullSteps.find((s) => s.id === Number(params.id));

  if (!step) {
    navigate(n.GENERAL.NOT_FOUND);
    return null;
  }

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

  return (
    <S.Container>
      <S.PageHead>
        <S.CloseWrapper onClick={() => navigate(-1)}>
          <OrganisationLogo logoUrl={publicOrg.logoUrl} />
        </S.CloseWrapper>

        <S.CloseWrapper onClick={() => navigate(-1)} padding="10px">
          <Icon icon="close" width={16} height={16} pointer />
        </S.CloseWrapper>
      </S.PageHead>

      <S.InnerContainer>
        <Row mb="8" mt="8" mbM="6">
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

        {step.howLongDoesItTake?.timeRangeText && (
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
                <T.H2 color="neutralMain">
                  {t(
                    'common.heading.howLongDoesItTake.title',
                    common.heading.howLongDoesItTake.title
                  )}
                </T.H2>
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
              <T.H2 color="neutralMain">
                {t(
                  'common.heading.thingsYouWillNeed.title',
                  common.heading.thingsYouWillNeed.title
                )}
              </T.H2>
            </S.SectionHeader>
            <Row inner>
              {step.thingsYouWillNeed?.length > 0 ? (
                step.thingsYouWillNeed.map((item, index) => (
                  <Col w={[4, 12, 6]} key={index} isFirst={index === 0}>
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
                    {t(
                      'common.heading.thingsYouWillNeed.text',
                      common.heading.thingsYouWillNeed.text
                    )}
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
                <T.H2 color="neutralMain">
                  {t(
                    'common.heading.whatYouWillNeedToKnow.title',
                    common.heading.whatYouWillNeedToKnow.title
                  )}
                </T.H2>
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
            <Tips tips={step.otherTips} startingColor={1} cols={[4, 12, 6]} />
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
                  <T.H2 color="neutralMain">
                    {t(
                      'common.heading.whereDoYouNeedToGo.title',
                      common.heading.whereDoYouNeedToGo.title
                    )}
                  </T.H2>
                </S.SectionHeader>
                <T.P color="neutralDark">
                  {t(
                    'common.heading.whereDoYouNeedToGo.text',
                    common.heading.whereDoYouNeedToGo.text
                  )}
                </T.P>
              </Col>
            </Row>
            <Row>
              <Col w={[4, 12, 6]}>
                <Button
                  variant="primary"
                  text={
                    publicOrg?.benefitCalculatorLabel ||
                    t(
                      'common.buttons.benefitCalculator',
                      common.buttons.benefitCalculator
                    ) ||
                    B.BENEFIT_CALCULATOR_LABEL
                  }
                  to={
                    publicOrg?.benefitCalculatorLink ||
                    B.BENEFIT_CALCULATOR_LINK
                  }
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
                  <T.H2 color="neutralMain">
                    {t(
                      'common.heading.whereDoYouNeedToGo.title',
                      common.heading.whereDoYouNeedToGo.title
                    )}
                  </T.H2>
                </S.SectionHeader>
                <T.P color="neutralDark">
                  {t(
                    'common.heading.whereDoYouNeedToGo.text',
                    common.heading.whereDoYouNeedToGo.text
                  )}
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
                  dir={step.whereDoYouNeedToGo.type === 'PHONE' ? 'ltr' : null}
                  external
                />
              </Col>
            </Row>
          </>
        )}

        <Row>
          <Col w={[4, 12, 6]} mt="8" mtM="7" mb="5">
            <TextWithIcon
              text={t('common.buttons.stuckCallUs', common.buttons.stuckCallUs)}
              isButton
              handleClick={() => setStuck(true)}
              underline
              weight="medium"
              mr="3"
              jc="center"
              iconProps={{
                icon: 'phone',
                color: 'primaryMain',
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col w={[4, 12, 6]} mt="6" mb="7">
            <Button
              variant="secondary"
              text={t(
                'common.buttons.markAsComplete',
                common.buttons.markAsComplete
              )}
              to={
                publicOrg?.uniqueSlug
                  ? n.GENERAL.HOME_ORG.replace(
                      ':uniqueSlug',
                      publicOrg.uniqueSlug
                    )
                  : n.GENERAL.HOME
              }
              handleClick={() => {
                markAsComplete(step.id);
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
