import { useState } from 'react';
import {
  Typography as T,
  Grid,
  TextWithIcon,
  Cards as C,
  HelpButton,
} from '../../../components';
import { SingleTip } from '../../../components/Cards/Tips';
import * as S from './style';
import { navRoutes as R } from '../../../constants';
const { Row, Col } = Grid;
const PendingDashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Row jc="space-between">
        <Col w={[4, 12, 7]} dir="column" ai="flex-start">
          <T.H1 mtM="5">Welcome</T.H1>
          <T.P mt={6} color="neutralDark">
            Once your account is approved you will be provided with a link to
            share with your clients
          </T.P>
          <SingleTip
            style={{ width: '100%' }}
            bgColor="primaryLight"
            borderColor="primaryMain"
            iconColor="primaryMain"
            mt={6}
            mb="0"
            tip={
              <T.H3 color="neutralMain">Your account is being reviewed</T.H3>
            }
          ></SingleTip>
          <S.ButtonsContainer>
            <S.ButtonWrapper to={R.ADMIN.EDIT_ACCOUNT_DETAILS}>
              <TextWithIcon
                size="large"
                bgColor="neutralSurface"
                text={
                  'Add or update your account details and edit your unique link'
                }
                mr="6px"
                ai="flex-start"
                isText
                iconProps={{
                  color: 'primaryMain',
                  icon: 'forwardArrow',
                }}
              />
            </S.ButtonWrapper>

            <S.ButtonWrapper to={R.ADMIN.CUSTOMISE}>
              <TextWithIcon
                size="large"
                bgColor="neutralSurface"
                text={'Add or update logo and brand colours'}
                ai="flex-start"
                mr="6px"
                isText
                iconProps={{
                  color: 'tertiaryMain',
                  icon: 'forwardArrow',
                }}
              />
            </S.ButtonWrapper>
          </S.ButtonsContainer>
          <C.Tips
            style={{ width: '100%' }}
            startingColor={1}
            mt={6}
            mb="0"
            tips={[
              <S.TipsList>
                <T.H3 color="secondaryMain" mb="2">
                  Customise resources includes
                </T.H3>
                <T.P weight="400" color="secondaryMain">
                  - Still need help phone number
                </T.P>
                <T.P weight="400" color="secondaryMain">
                  - Benefit calculator link
                </T.P>
                <T.P weight="400" color="secondaryMain">
                  - Debt advice link
                </T.P>
                <T.P weight="400" color="secondaryMain">
                  - Budget link
                </T.P>
                <T.P weight="400" color="secondaryMain">
                  - Employment services link
                </T.P>
                <T.P weight="400" color="secondaryMain">
                  - Mental health links
                </T.P>
              </S.TipsList>,
            ]}
          />
        </Col>
      </Row>
      <HelpButton
        adminHelp
        parentState={open}
        parentFunc={() => setOpen(false)}
      />
    </>
  );
};

export default PendingDashboard;
