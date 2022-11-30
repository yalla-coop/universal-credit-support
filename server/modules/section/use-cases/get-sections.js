import * as Sections from '../model';
import { translateSections } from '../../../services/translation';
import * as Translation from '../../translations/model';

const getSections = async ({ lng, uniqueSlug = 'hyde', forPublic }) => {
  if (forPublic) {
    const sections = await Sections.getSectionsByOrgSlugForPublic(
      uniqueSlug,
      lng,
    );

    const sectionsT = await translateSections({
      lng,
      sections,
    });

    Promise.all(
      sectionsT.map((c) => {
        if (!c.isTranslated) {
          return Translation.createSectionI18n({
            sectionId: c.id,
            languageCode: c.languageCode,
            title: c.title,
          });
        }
        return Promise.resolve();
      }),
    );

    return sectionsT;
  }
};

export default getSections;
