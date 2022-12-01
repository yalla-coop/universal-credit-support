import { useEffect } from 'react';
import GeneralPaddingSection from '../../../components/Layout/GeneralPaddingSection';
import {
  Typography as T,
  Grid,
  GoBack,
  HelpfulResources,
  PageHeader,
  Cards,
  StillNeedHelp,
} from '../../../components';
import { usePublicOrg } from '../../../context/public-org';
import * as S from './style';
import { useTranslation } from 'react-i18next';
import { common } from '../../../constants';
const { Row, Col } = Grid;
const { SingleTip } = Cards;

const BudgetingPage = () => {
  const { t } = useTranslation();
  const { publicOrg, setPageTitle } = usePublicOrg();
  const stillNeedHelp = publicOrg?.resources?.find(
    (resource) => resource.key === 'STILL_NEED_HELP'
  );

  useEffect(() => {
    setPageTitle('Budgeting');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <S.Container>
      <PageHeader
        title={t(
          'common.section.budgeting.title',
          common.section.budgeting.title
        )}
        textColor="secondaryMain"
        bgColor="neutralLight"
        borderColor="primaryTextMain"
      />
      <GeneralPaddingSection>
        <S.Content>
          <S.Topics>
            <Row mb="6" inner>
              <Col w={[4, 12, 12]}>
                <T.P color="neutralDark">
                  {t(
                    'common.section.budgeting.description',
                    common.section.budgeting.description
                  )}
                </T.P>
              </Col>
            </Row>
            <Row mb="4" inner>
              <Col w={[4, 12, 12]}>
                <T.H2 color="neutralMain">
                  {t(
                    'common.section.budgeting.tipTitle',
                    common.section.budgeting.tipTitle
                  )}
                </T.H2>
              </Col>
            </Row>
            {/* first tip */}
            <Row mb="3" inner>
              <Col w={[4, 12, 12]}>
                <SingleTip
                  bgColor="secondaryMain"
                  borderColor="primaryTextMain"
                  iconColor="primaryTextMain"
                  tip={
                    <div>
                      <T.H3 color="primaryTextMain">
                        {t(
                          'common.section.budgeting.tip',
                          common.section.budgeting.tip
                        )}
                      </T.H3>
                      <S.TipList ml="5" color="primaryTextMain">
                        <li>
                          <T.H3 color="primaryTextMain">
                            {t(
                              'common.section.budgeting.tip1P1',
                              common.section.budgeting.tip1P1
                            )}
                          </T.H3>
                        </li>
                        <li>
                          <T.H3 color="primaryTextMain">
                            {t(
                              'common.section.budgeting.tip1P2',
                              common.section.budgeting.tip1P2
                            )}
                          </T.H3>
                        </li>
                        <li>
                          <T.H3 color="primaryTextMain">
                            {t(
                              'common.section.budgeting.tip1P3',
                              common.section.budgeting.tip1P2
                            )}
                          </T.H3>
                        </li>
                      </S.TipList>
                    </div>
                  }
                />
              </Col>
            </Row>

            {/* second tip */}
            <Row mb="6" inner>
              <Col w={[4, 12, 12]}>
                <SingleTip
                  bgColor="secondaryLight"
                  borderColor="secondaryMain"
                  iconColor="secondaryMain"
                  tip={
                    <div>
                      <T.H3 color="secondaryMain">
                        {t(
                          'common.section.budgeting.tip',
                          common.section.budgeting.tip
                        )}
                      </T.H3>
                      <S.TipList ml="5" color="secondaryMain">
                        <li>
                          <T.H3 color="secondaryMain">
                            {t(
                              'common.section.budgeting.tip2P1',
                              common.section.budgeting.tip2P1
                            )}
                          </T.H3>
                        </li>
                        <li>
                          <T.H3 color="secondaryMain">
                            {t(
                              'common.section.budgeting.tip2P2',
                              common.section.budgeting.tip2P2
                            )}
                          </T.H3>
                        </li>
                      </S.TipList>
                    </div>
                  }
                />
              </Col>
            </Row>
            <Row mb="6" inner>
              <Col w={[4, 12, 12]}>
                <HelpfulResources
                  resources={publicOrg?.resources?.filter(
                    (r) => r.category === 'BUDGET'
                  )}
                />
              </Col>
            </Row>
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

export default BudgetingPage;
