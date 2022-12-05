import * as Sections from '../model';
import { translateSections } from '../../../services/translation';
import * as Translation from '../../translations/model';

const getSections = async ({ lng, uniqueSlug = 'hyde', forPublic }) => {
  if (forPublic) {
    const sections = await Sections.findSectionsByOrgSlugForPublic(
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
  const sections = await Sections.findSectionsByOrgSlug(uniqueSlug);
  return sections;
};

export default getSections;
