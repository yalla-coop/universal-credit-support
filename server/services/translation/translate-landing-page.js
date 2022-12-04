import { translate } from './translation-api';

const translateLandingPage = async ({ lng, landingPage }) => {
  const { headline, subtitle, instructions, languageCode } = landingPage;
  if (languageCode === lng || lng === 'en') {
    return {
      ...landingPage,
      languageCode: lng,
      isTranslated: true,
    };
  }
  const res = await translate({
    source: 'en',
    target: [lng],
    json: { headline, subtitle, instructions },
  });

  return {
    ...landingPage,
    headline: res.content.headline,
    subtitle: res.content.subtitle,
    instructions: res.content.instructions,
    languageCode: lng,
  };
};

export default translateLandingPage;
