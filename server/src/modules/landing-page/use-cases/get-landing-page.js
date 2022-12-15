import * as LandingPage from '../model';
import translateLandingPage from '../../../services/translation/translate-landing-page';
import * as Translation from '../../translations/model';

const getLandingPage = async ({ lng }) => {
  const landingPage = await LandingPage.getLandingPageContent(lng);
  const landingPageT = await translateLandingPage({
    lng,
    landingPage,
  });

  if (!landingPageT.isTranslated) {
    Translation.createLandingPageI18n({
      landingPageContentId: landingPageT.id,
      languageCode: landingPageT.languageCode,
      headline: landingPageT.headline,
      subtitle: landingPageT.subtitle,
      instructions: landingPageT.instructions,
    });
  }

  return landingPageT;
};

export default getLandingPage;
