import * as S from './style';
import { TextWithIcon, Cards, Typography as T } from '../../../components';
import { navRoutes as R } from '../../../constants';

const DashboardLinks = () => {
  return (
    <>
      <S.ButtonsContainer>
        <S.ButtonWrapper to={R.ADMIN.CUSTOMISE}>
          <TextWithIcon
            size="large"
            bgColor="neutralSurface"
            text={'Change or add to the layout of the tool'}
            mr="6px"
            ai="flex-start"
            isText
            iconProps={{
              color: 'primaryDark',
              icon: 'forwardArrow',
            }}
          />
        </S.ButtonWrapper>

        <S.ButtonWrapper to={R.ADMIN.EDIT_ACCOUNT_DETAILS}>
          <TextWithIcon
            size="large"
            bgColor="neutralSurface"
            text={
              'Add or update your account details and edit your unique link'
            }
            ai="flex-start"
            mr="6px"
            isText
            iconProps={{
              color: 'secondaryMain',
              icon: 'forwardArrow',
            }}
          />
        </S.ButtonWrapper>

        <S.ButtonWrapper to={R.ADMIN.CUSTOMISE_RESOURCES}>
          <TextWithIcon
            size="large"
            bgColor="neutralSurface"
            text={'Customise resources and client contact numbers'}
            ai="flex-start"
            mr="6px"
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
              color: 'neutralMain',
              icon: 'forwardArrow',
            }}
          />
        </S.ButtonWrapper>
      </S.ButtonsContainer>
      <Cards.Tips
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
    </>
  );
};

export default DashboardLinks;
