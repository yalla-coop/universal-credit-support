import { Typography as T, Grid, Cards as C, Button } from '../../components';
import { navRoutes as R } from '../../constants';
import { useAccessibility } from '../../context/accessibility';
import * as S from './style';
import GeneralPaddingSection from '../../components/Layout/GeneralPaddingSection';

const { Col, Row } = Grid;

const Accessibility = () => {
  const { isFontLarge, setIsFontLarge } = useAccessibility();

  return (
    <GeneralPaddingSection>
      <Row jc="space-between">
        <Col w={[4, 12, 6]} dir="column" ai="flex-start">
          <T.H1 mtM="5">Accessibility</T.H1>
          <T.P mt="5">
            Accessibility on this website is guided by government standards and
            the Web Content Accessibility Guidelines WCAG are widely accepted as
            the international standard for accessibility on the web.
          </T.P>
          <T.P mt="5" mtM="0">
            Whilst we aim to make this website accessible to all users and
            achieve a conformance level ‘AAA’; we continually work with
            stakeholders to ensure that conformance level ‘A’ is adhered to as a
            minimum.
          </T.P>{' '}
          <C.Tips
            mt="5"
            mtM="4"
            style={{ width: '300px' }}
            tips={[
              <T.H3 color="white">
                Tip! If you experience any accessibility issue on this site or
                have any comment, please{' '}
                <T.Link
                  to={`mailto:${R.EXTERNAL.HYDE_EMAIL}`}
                  color="white"
                  external
                  underline
                  weight="semi"
                >
                  contact us
                </T.Link>{' '}
                .
              </T.H3>,
            ]}
            startingColor={0}
            mb="0"
          />
          <T.H2 mt="8" mtM="6">
            Adjust Text Size
          </T.H2>
          <S.ButtonWrapper>
            <Button
              handleClick={() => {
                if (!isFontLarge) {
                  document.getElementsByTagName('html')[0].style.fontSize =
                    '1.25rem';
                  localStorage.setItem('isFontLarge', 'true');
                  setIsFontLarge(true);
                } else {
                  document.getElementsByTagName('html')[0].style.fontSize =
                    '1rem';
                  localStorage.removeItem('isFontLarge');
                  setIsFontLarge(false);
                }
              }}
              variant="primary"
              disabled={false}
              text={
                isFontLarge ? '- Decrease text size' : '+ Increase text size'
              }
              type="submit"
              mt={4}
              w="300px"
            />
            <C.Tips
              mlM="0"
              mt="4"
              mtM="0"
              style={{ width: '300px' }}
              tips={[
                <T.P color="neutralMain" weight="semi">
                  Tip! Click increase text size by 25% (e.g. 16px to 20px)
                </T.P>,
              ]}
              startingColor={3}
              mb="0"
            />
          </S.ButtonWrapper>
        </Col>
      </Row>
    </GeneralPaddingSection>
  );
};
export default Accessibility;
