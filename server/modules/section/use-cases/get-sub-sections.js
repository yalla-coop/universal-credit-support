import * as Sections from '../model';
import { translateSections } from '../../../services/translation';
import * as Translation from '../../translations/model';

const getSubSections = async ({ id, forPublic, lng }) => {
  if (forPublic) {
    const section = await Sections.getSubSectionsBySectionIdForPublic(id, lng);

    const sections = [
      {
        id: section.id,
        languageCode: section.languageCode,
        title: section.title,
      },
      ...section.childrenSections.map((s) => ({
        id: s.id,
        languageCode: s.languageCode,
        title: s.title,
      })),
    ];

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

    return {
      id: section.id,
      title: sectionsT[0].title,
      childrenSections: section.childrenSections.map((s, i) => ({
        id: s.id,
        title: sectionsT[i + 1].title,
      })),
    };
  }
};

export default getSubSections;
