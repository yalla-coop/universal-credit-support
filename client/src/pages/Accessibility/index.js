import GeneralPaddingSection from '../../components/Layout/GeneralPaddingSection';

import {
  Typography as T,
  Grid,
  Cards as C,
  Button,
  Inputs as I,
} from '../../components';
import { navRoutes as R } from '../../constants';
import { useAccessibility } from '../../context/accessibility';
import OverlayColor from './OverlayColor';

import * as S from './style';

const { Col, Row } = Grid;

const fontsOptions = [
  { value: 'Roboto', label: 'Roboto' },
  { value: 'Heebo', label: 'Heebo' },
  { value: 'Comic Neue', label: 'Comic Neue' },
  { value: '', label: 'none' },
];

const Accessibility = () => {
  const { isFontLarge, setIsFontLarge, layoutFontFamily, setLayoutFontFamily } =
    useAccessibility();

  const handleSelect = (value) => {
    localStorage.setItem('layoutFontFamily', value);
    setLayoutFontFamily(value);
  };

  return (
    <GeneralPaddingSection>
      <Row jc="space-between">
        <Col w={[4, 12, 8]} dir="column" ai="flex-start">
          <T.H1 mtM="2">Accessibility</T.H1>
          <T.P mt="5">
            Accessibility on this website is guided by government standards and
            the Web Content Accessibility Guidelines WCAG are widely accepted as
            the international standard for accessibility on the web.
          </T.P>
          <T.P mt="5" mtT="0">
            Whilst we aim to make this website accessible to all users and
            achieve a conformance level ‘AAA’; we continually work with
            stakeholders to ensure that conformance level ‘A’ is adhered to as a
            minimum.
          </T.P>{' '}
          <S.Wrapper>
            <C.Tips
              mt="5"
              mtT="4"
              style={{ maxWidth: '300px', width: '100%' }}
              tips={[
                <T.H3 color="white">
                  Tip! If you experience any accessibility issue on this site or
                  have any comment, please{' '}
                  <T.Link
                    to={`mailto:${R.EXTERNAL.COL_EMAIL}`}
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
            <C.Tips
              mt="5"
              mtT="0"
              style={{ maxWidth: '300px', width: '100%' }}
              tips={[
                <T.H3 color="secondaryMain">
                  Tip! There are many accessibility features on devices, which
                  can be found on links such as{' '}
                  <T.Link
                    to={`mailto:${R.EXTERNAL.APPLE_ACCESSIBILITY}`}
                    color="secondaryMain"
                    external
                    underline
                    weight="semi"
                  >
                    Apple accessability features
                  </T.Link>{' '}
                  and{' '}
                  <T.Link
                    to={`mailto:${R.EXTERNAL.ANDROID_ACCESSIBILITY}`}
                    color="secondaryMain"
                    external
                    underline
                    weight="semi"
                  >
                    Android accessibility
                  </T.Link>{' '}
                  .
                </T.H3>,
              ]}
              startingColor={1}
              mb="0"
            />
          </S.Wrapper>
        </Col>

        <S.HideInDesktop>
          <Col w={[4, 12, 12]}>
            <S.Divider />
          </Col>
        </S.HideInDesktop>

        <Col w={[4, 8, 4]}>
          <OverlayColor />
        </Col>

        <S.HideInDesktop>
          <Col w={[4, 12, 12]}>
            <S.Divider />
          </Col>
        </S.HideInDesktop>
      </Row>
      <Row jc="space-between">
        <Col w={[4, 8, 7]}>
          <T.H2 mt="8" mtT="0">
            Adjust Text Size
          </T.H2>
          <S.Wrapper>
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
            />
            <C.Tips
              mlM="0"
              mt="4"
              mtT="0"
              style={{ width: '100%' }}
              tips={[
                <T.P color="neutralMain" weight="semi">
                  Tip! Click increase text size by 25% (e.g. 16px to 20px)
                </T.P>,
              ]}
              startingColor={3}
              mb="0"
            />
          </S.Wrapper>
        </Col>
        <Col w={[4, 4, 4]} mt="8">
          <S.ShowInDesktop>
            <S.fontInputWrapper>
              <I.Dropdown
                label="Change font"
                options={fontsOptions}
                selected={layoutFontFamily}
                handleChange={handleSelect}
                allowClear={false}
              />
            </S.fontInputWrapper>
          </S.ShowInDesktop>
        </Col>
      </Row>
      <Row mt="4">
        <Col w={[4, 12, 8]}>
          <T.H3 color="neutralMain" weight="bold">
            Internet Explorer
          </T.H3>
        </Col>
        <Col w={[4, 12, 8]} mt="2" mb="4">
          <T.P color="neutralDark">
            Go to “View” on the menu bar &gt; Select text size / zoom
          </T.P>
        </Col>

        <Col w={[4, 12, 8]}>
          <T.H3 color="neutralMain" weight="bold">
            Firefox
          </T.H3>
        </Col>
        <Col w={[4, 12, 8]} mt="2">
          <T.P color="neutralDark">
            Go to “View” on the menu bar &gt; Select text size / zoom.
            Alternatively hold down the “Ctrl” button on your keyboard and press
            the plus (+) key to increase text size. To reduce the latter hold
            down the “Ctrl” button and press the minus (-) key. Please note that
            the above settings may differ depending on the browser version.
          </T.P>
        </Col>
        <S.HideInDesktop>
          <Col w={[4, 12, 12]}>
            <S.Divider />
          </Col>
          <Col w={[4, 8, 12]}>
            <S.fontInputWrapper>
              <I.Dropdown
                label="Change font"
                options={fontsOptions}
                selected={layoutFontFamily}
                handleChange={(selectValue) => setLayoutFontFamily(selectValue)}
                allowClear={false}
              />
            </S.fontInputWrapper>
          </Col>
          <Col w={[4, 12, 12]}>
            <S.Divider />
          </Col>
        </S.HideInDesktop>
        <Col w={[4, 12, 8]} mt="8" mtT="0">
          <T.H2 color="black" weight="bold">
            Text To Speech
          </T.H2>
        </Col>

        <Col w={[4, 12, 8]} mt="3">
          <T.P color="neutralDark">
            Many computers and mobile devices today have built in text-to-speech
            software. Here are guides for each of the major browsers and
            devices:
          </T.P>
        </Col>

        <Col w={[4, 12, 8]} mt="4">
          <T.H3 color="neutralMain" weight="bold">
            Chrome
          </T.H3>
        </Col>
        <Col w={[4, 12, 8]} mt="2">
          <T.P color="neutralDark">
            <T.Link
              external
              underline
              color="neutralMain"
              to={R.EXTERNAL.CHROME_GOOGLE_SPEAK}
            >
              Click here to download Google Speak
            </T.Link>{' '}
            and select the Add to Chrome button
          </T.P>
        </Col>

        <Col w={[4, 12, 8]} mt="4">
          <T.H3 color="neutralMain" weight="bold">
            Windows Edge
          </T.H3>
        </Col>
        <Col w={[4, 12, 8]} mt="2">
          <T.P color="neutralDark">
            Open the Edge browser and then click on Read Aloud Option or on your
            keyboard press Ctrl + Shift + U
          </T.P>
        </Col>

        <Col w={[4, 12, 8]} mt="4">
          <T.H3 color="neutralMain" weight="bold">
            Android Apps
          </T.H3>
        </Col>
        <Col w={[4, 12, 8]} mt="2">
          <T.P color="neutralDark">
            <T.Link
              external
              underline
              color="neutralMain"
              to={R.EXTERNAL.VOICE_ALOUD_READER_ANDROID}
            >
              Click here to download Read Aloud
            </T.Link>{' '}
            for Android phones or tablets
          </T.P>
        </Col>

        <Col w={[4, 12, 8]} mt="4">
          <T.H3 color="neutralMain" weight="bold">
            Apple
          </T.H3>
        </Col>
        <Col w={[4, 12, 8]} mt="2">
          <T.P color="neutralDark">
            <T.Link
              external
              underline
              color="neutralMain"
              to={R.EXTERNAL.VOICE_ALOUD_READER_APPLE}
            >
              Click here to download Voice Aloud Reader for Apple devices.
            </T.Link>{' '}
            Choose your device when you download. Or go to your Apple App store
            and search Voice Aloud Reader
          </T.P>
        </Col>
      </Row>
    </GeneralPaddingSection>
  );
};
export default Accessibility;
