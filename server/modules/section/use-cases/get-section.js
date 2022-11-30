import Boom from '@hapi/boom';
import * as Section from '../model';
import { errorMsgs } from '../../../services/error-handler';
import { userRoles } from '../../../constants';
import { translateSections } from '../../../services/translation';
import * as Translation from '../../translations/model';

const getSection = async ({ id, lng, forPublic, role }) => {
  if (!forPublic) {
    const section = await Section.findSectionById(id);
    if (!section) {
      throw Boom.notFound(errorMsgs.NOT_FOUND);
    }

    // if not for public and section is default, only super admins can access it
    if (section.defaultPosition && role !== userRoles.SUPER_ADMIN) {
      throw Boom.unauthorized(errorMsgs.UNAUTHORISED);
    }

    return section;
  }

  const section = await Section.findSectionWithTranslationById(id, lng);
  let parentSection;
  const sections = [
    {
      id: section.id,
      languageCode: section.languageCode,
      title: section.title,
    },
  ];

  if (section.parentSectionId) {
    parentSection = await Section.findSectionWithTranslationById(
      section.parentSectionId,
      lng,
    );

    sections.push({
      id: parentSection.id,
      languageCode: parentSection.languageCode,
      title: parentSection.title,
    });
  }

  const sectionsT = await translateSections({
    lng,
    sections,
  });
  console.log('sectionsT[0]', sectionsT[0]);
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

  if (!section) {
    throw Boom.notFound(errorMsgs.NOT_FOUND);
  }

  return {
    id: section.id,
    title: sectionsT[0].title,
    parentSectionTitle: sectionsT[1] && sectionsT[1].title,
  };
};

export default getSection;
