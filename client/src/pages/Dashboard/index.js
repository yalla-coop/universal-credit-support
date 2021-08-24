import {
  Typography as T,
  Grid,
  TextWithIcon,
  Cards as C,
} from '../../components';
import * as S from './style';
import { navRoutes as R, roles } from '../../constants';
import { useAuth } from '../../context/auth';

const { Col, Row } = Grid;

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <Row jc="space-between">
        <Col w={[4, 12, 7]}>
          <T.H1 mtM="5" style={{ width: '100%' }}>
            Welcome back
          </T.H1>
          <T.P mt="7" mtM="4" style={{ maxWidth: 420 }}>
            This is the link you will need to share with your customers to
            access the tool
          </T.P>
          <S.LinkWrapper>
            <TextWithIcon
              iconColor="primaryMain"
              to="http://www.uc-helper.com/yalla-cooperative"
              icon="open"
              text="www.uc-helper.com/yalla-cooperative"
              external
              underline
            />
          </S.LinkWrapper>

          <TextWithIcon
            to={R.ADMIN.EDIT_DETAILS}
            text="Edit my organisation details"
            icon="forwardArrow"
            iconColor="primaryMain"
          />
          {user.role === roles.ADMIN && (
            <S.CardWrapper>
              <C.Tips
                tips={[
                  <a href="mailto:hydefoundation@hyde-housing.co.uk">
                    <T.H3 color="secondaryMain">
                      Want to have access rights to change any of the content on
                      the tool? Then contact hydefoundation@hyde-housing.co.uk
                    </T.H3>
                  </a>,
                ]}
                startingColor={1}
              />
            </S.CardWrapper>
          )}
        </Col>
        <Col w={[4, 12, 4]}>
          {/* <T.H2 mtT="7">Analytics</T.H2> */}
          {/* <S.AnalysisCardsWrapper>
            <S.AnalysisCard bgColor="neutralLight">
              <T.H1 color="neutralMain">836</T.H1>
              <T.P color="neutralDark">
                Number of times a claims process has been started on my tool
              </T.P>
            </S.AnalysisCard>
            <S.AnalysisCard bgColor="neutralMain">
              <T.H1 color="white">765</T.H1>
              <T.P color="white">
                Number of times everything has been completed on my tool to
                complete a claim
              </T.P>
            </S.AnalysisCard>
            <S.AnalysisCard bgColor="secondaryMain">
              <T.H1 color="white">1,254</T.H1>
              <T.P color="white">Visitors to my tool</T.P>
            </S.AnalysisCard>
          </S.AnalysisCardsWrapper> */}
          <S.CardWrapper>
            <C.Tips
              tips={[
                <a
                  href="mailto:hydefoundation@
    hyde-housing.co.uk"
                >
                  <T.H3 color="neutralMain">
                    Interested in more specific statistics? Get in touch with
                    <span style={{ lineBreak: 'anywhere' }}>
                      hydefoundation@hyde-housing.co.uk
                    </span>
                  </T.H3>
                </a>,
              ]}
              startingColor={3}
            />
          </S.CardWrapper>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
