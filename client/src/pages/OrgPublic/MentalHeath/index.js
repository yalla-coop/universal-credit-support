import { useEffect } from 'react';
import GeneralPaddingSection from '../../../components/Layout/GeneralPaddingSection';
import { Typography as T, Grid, GoBack } from '../../../components';
import PageHeader from '../../../components/PageHeader';
import HelpfulResources from '../../../components/HelpfulResources';
import { usePublicOrg } from '../../../context/public-org';
import { useTranslation } from 'react-i18next';
import { common } from '../../../constants';

import * as S from './style';

const { Row, Col } = Grid;

const MentalHeath = () => {
  const { t } = useTranslation();
  const { publicOrg, setPageTitle } = usePublicOrg();

  useEffect(() => {
    setPageTitle('Mental Health Support');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <S.Container>
      <PageHeader
        title={t(
          'common.section.mentalHealthSupport.title',
          common.section.mentalHealthSupport.title
        )}
        textColor="neutralMain"
        bgColor="tertiaryMain"
        borderColor="neutralMain"
      />
      <GeneralPaddingSection>
        <Row>
          <Col w={[4, 8, 6]}>
            <T.P color="neutralDark">
              {t(
                'common.section.mentalHealthSupport.description1',
                common.section.mentalHealthSupport.description1
              )}
            </T.P>
          </Col>
        </Row>
        <Row mt="6" mb="5">
          <Col w={[4, 8, 6]}>
            <HelpfulResources
              resources={publicOrg?.resources?.filter(
                (r) => r.category === 'MENTAL_HEALTH'
              )}
            />
          </Col>
        </Row>
        <Row mb="4">
          <Col w={[4, 8, 6]}>
            <T.P color="neutralDark">
              {t(
                'common.section.mentalHealthSupport.description2',
                common.section.mentalHealthSupport.description2
              )}
              <br />
              <br />
              {t(
                'common.section.mentalHealthSupport.samaritansHelpline',
                common.section.mentalHealthSupport.samaritansHelpline
              )}{' '}
              <T.Link weight="bold" external href={`tel:116123`} underline>
                116 123
              </T.Link>
              <br />
              {t(
                'common.section.mentalHealthSupport.samaritansHours',
                common.section.mentalHealthSupport.samaritansHours
              )}
            </T.P>
          </Col>
        </Row>
        <Row mt="4" mb="5">
          <Col w={[4, 8, 6]}>
            <GoBack
              text={t('common.buttons.goBack', common.buttons.goBack)}
              icon="backwardArrow"
              iconColor="primaryMain"
            />
          </Col>
        </Row>
      </GeneralPaddingSection>
    </S.Container>
  );
};

export default MentalHeath;
