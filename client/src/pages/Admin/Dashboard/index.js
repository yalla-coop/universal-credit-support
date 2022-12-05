import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography as T,
  Grid,
  TextWithIcon,
  Cards as C,
  HelpButton,
  Modal,
} from '../../../components';
import * as S from './style';
import { navRoutes as R, roles } from '../../../constants';
import { useAuth } from '../../../context/auth';
import { useAdminOrg } from '../../../context/admin-org';
import { Organisations } from '../../../api-calls';
import DashboardLinks from './DashboardLinks';
import PendingDashboard from './PendingDashboard';

const { Col, Row } = Grid;

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [orgModalOpen, setOrgModalOpen] = useState(false);
  const { adminOrg } = useAdminOrg();
  const { user } = useAuth();
  const navigate = useNavigate();
  const isSuperAdmin = user.role === roles.SUPER_ADMIN;
  const isPending = adminOrg.status === 'AWAITING_APPROVAL';

  useEffect(() => {
    const getAwaitingApprovalOrganisations = async () => {
      const { data } = await Organisations.getAwaitingApprovalOrganisations();
      if (data) {
        if (data?.length > 0) {
          setOrgModalOpen(true);
        } else {
          setOrgModalOpen(false);
        }
      }
    };

    if (isSuperAdmin) {
      getAwaitingApprovalOrganisations();
    }
  }, [isSuperAdmin]);

  if (isPending && !isSuperAdmin) {
    return <PendingDashboard />;
  }

  return (
    <>
      <Row jc="space-between">
        <Col w={[4, 12, 7.5]} dir="column" ai="flex-start">
          <T.H1 mtM="5">Welcome back</T.H1>
          <T.P
            mt={isSuperAdmin ? '42px' : 6}
            mb={isSuperAdmin ? '40px' : 4}
            color="neutralDark"
            style={{ maxWidth: isSuperAdmin ? 420 : 'auto' }}
          >
            This is the link you will need to share with your clients to access
            the tool
          </T.P>
          <S.LinkWrapper mb={isSuperAdmin && '45px'}>
            <TextWithIcon
              to={`${window.location.origin}/${adminOrg.uniqueSlug}`}
              mr={isSuperAdmin ? '15px' : '20px'}
              text={`${window.location.origin}/${adminOrg.uniqueSlug}`}
              external
              underline
              iconProps={{
                color: 'primaryMain',
                icon: 'open',
              }}
            />
          </S.LinkWrapper>

          {isSuperAdmin && (
            <TextWithIcon
              to={R.ADMIN.EDIT_ACCOUNT_DETAILS}
              text="Edit my organisation details"
              iconProps={{
                icon: 'forwardArrow',
                color: 'primaryMain',
              }}
            />
          )}
          {!isSuperAdmin && <DashboardLinks />}
        </Col>
        <Col w={[4, 12, 4]}>
          {/* <T.H2 mt="3" mtT="7">
            Analytics
          </T.H2>
          <S.AnalysisCardsWrapper>
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
              style={{ width: '100%' }}
              tips={[
                <a href={`mailto:${R.EXTERNAL.HYDE_EMAIL}`}>
                  <T.H3 color="neutralMain">
                    Interested in more specific statistics? Get in touch with{' '}
                    <span style={{ lineBreak: 'anywhere' }}>
                      {R.EXTERNAL.HYDE_EMAIL}
                    </span>
                  </T.H3>
                </a>,
              ]}
              startingColor={2}
              mb="0"
            />
          </S.CardWrapper>
          {user.role === roles.ADMIN && (
            <S.CardWrapper>
              <C.Tips
                style={{ width: '100%' }}
                tips={[
                  <a href={`mailto:${R.EXTERNAL.HYDE_EMAIL}`}>
                    <T.H3 color="secondaryMain">
                      Want to have access rights to change any of the content on
                      the tool? Then contact {R.EXTERNAL.HYDE_EMAIL}
                    </T.H3>
                  </a>,
                ]}
                startingColor={1}
              />
            </S.CardWrapper>
          )}
        </Col>
      </Row>
      <HelpButton
        adminHelp
        parentState={open}
        parentFunc={() => setOpen(false)}
      />
      {isSuperAdmin && (
        <Modal
          visible={orgModalOpen}
          setIsModalVisible={setOrgModalOpen}
          parentFunc={() => navigate(R.SUPER_ADMIN.ORGANISATIONS)}
          title={'Organisations to approve'}
          description={
            'You have organisations awaiting for approval. Please click to review them below. '
          }
          btnText="Review"
        />
      )}
    </>
  );
};

export default Dashboard;
