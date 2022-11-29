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

const { Row, Col } = Grid;
const { SingleTip } = Cards;
const BudgetingPage = () => {
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
        title="**Budgeting**"
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
                  Doing a budget to work out how much money you have coming in
                  and going out is a great place to start. There are many
                  budgeting tools available to help you do this, however a debt
                  advisor or a money advisor will be able to help you if you
                  find it difficult to do on your own.
                </T.P>
              </Col>
            </Row>
            <Row mb="4" inner>
              <Col w={[4, 12, 12]}>
                <T.H2 color="neutralMain">Here are our top tips</T.H2>
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
                      <T.H3 color="primaryTextMain">Tip!</T.H3>
                      <S.TipList ml="5" color="primaryTextMain">
                        <li>
                          <T.H3 color="primaryTextMain">
                            When doing your budget be as honest and accurate as
                            possible.
                          </T.H3>
                        </li>
                        <li>
                          <T.H3 color="primaryTextMain">
                            Put down what you actually spend, as opposed to what
                            you think you should or could spend.{' '}
                          </T.H3>
                        </li>
                        <li>
                          <T.H3 color="primaryTextMain">
                            By creating an accurate budget you get the best
                            possible starting point for making the most of your
                            money, talking to creditors, or getting money or
                            debt advice.
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
                      <T.H3 color="secondaryMain">Tip!</T.H3>
                      <S.TipList ml="5" color="secondaryMain">
                        <li>
                          <T.H3 color="secondaryMain">
                            Most budgets are done for a calendar month; keep
                            this in mind when adding your income and outgoings.
                            For example, to work out the monthly sum for
                            something you pay weekly you will need to multiply
                            the sum by 52 (weeks), then divide by 12 (months).
                          </T.H3>
                        </li>
                        <li>
                          <T.H3 color="secondaryMain">
                            A budget tool will do this for you automatically.
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
