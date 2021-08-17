import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  TextWithIcon,
  Modal,
  Icon,
  Typography as T,
  Button,
  Inputs,
  Grid,
} from '../../components';
import { useSteps } from '../../context/steps';
import { useLang } from '../../context/lang';
import { t } from '../../helpers';
import { navRoutes as n } from '../../constants';
import { ReactComponent as MobileLogo } from '../../components/assets/MobileLogo.svg';
import { ReactComponent as DesktopLogo } from '../../components/assets/DesktopLogo.svg';
import { breakpoints } from '../../theme';

import * as S from './style';

const { Checkbox } = Inputs;
const { Row, Col } = Grid;

function Step() {
  const params = useParams();
  const { lang } = useLang();
  const { steps, checkUncheckItem, setJustCompletedId } = useSteps();

  const step = steps.find((s) => s.id === params.id);
  const desktopColWidth = step.checkListItems.length > 5 ? 6 : 12;
  const isTablet = useMediaQuery({
    query: `(max-width: ${breakpoints.tablet})`,
  });
  return (
    <Modal>
      <S.Container>
        <Row mb="4" mt="2">
          <Col w={[4, 12, 12]}>
            <S.PageHead>
              {isTablet ? <MobileLogo /> : <DesktopLogo />}
              <S.Link to="/">
                <Icon icon="close" />
              </S.Link>
            </S.PageHead>
          </Col>
        </Row>
        <Row mb="5">
          <Col w={[4, 12, 12]}>
            <T.H2 weight="bold">{t(`${step.name}.secondaryTitle`, lang)}</T.H2>
          </Col>
        </Row>
        <Row style={{ flex: 1 }}>
          <div style={{ width: '100%' }}>
            {step.externalButtonLink && (
              <Row inner mb="7">
                <Col w={[4, 12, 6]}>
                  <Button
                    variant="primary"
                    text={t(`${step.name}.externalButtonTitle`, lang)}
                    to={n.EXTERNAL[step.externalButtonLink]}
                    target="_blank"
                    rel="noopener noreferrer"
                    external
                  />
                </Col>
              </Row>
            )}
            <T.P isSmall weight="bold" mb="5">
              {t('informationYouWillNeed', lang)}
            </T.P>
            <Row inner>
              {step.checkListItems.map((item) => (
                <Col w={[4, 12, desktopColWidth]}>
                  <Checkbox
                    key={item.value}
                    checked={item.isChecked}
                    handleChange={() => checkUncheckItem(step.name, item.value)}
                    label={t(`${step.name}.checkListItems.${item.value}`, lang)}
                    mb="5"
                  />
                </Col>
              ))}
            </Row>
          </div>

          <Row
            inner
            style={{
              width: '100%',
              minHeight: '58px',
              alignSelf: 'flex-end',
            }}
          >
            {step.isCompleted ? (
              <Col w={[4, 12, 6]} mt="6" mb="7">
                <Button
                  variant="secondary"
                  text={t('nextStep', lang)}
                  to={n.GENERAL.HOME}
                  handleClick={() => {
                    setJustCompletedId(step.id);
                  }}
                />
              </Col>
            ) : (
              step.externalLink && (
                <Col w={[4, 12, 6]} mt="6" mb="6">
                  <TextWithIcon
                    text={t('callUsLinkText', lang)}
                    to={n.EXTERNAL.CALL_US}
                    target="_blank"
                    rel="noopener noreferrer"
                    external
                    underline
                  />
                </Col>
              )
            )}
          </Row>
        </Row>
      </S.Container>
    </Modal>
  );
}

export default Step;
