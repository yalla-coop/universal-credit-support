import Boom from '@hapi/boom';
import * as Sections from '../model';
import * as Users from '../../user/model';

import sendEmail from '../../../services/mailing';
import * as templatesId from '../../../services/mailing/templates/templates-constants';
import { appLinks } from '../../../constants';

import { getClient } from '../../../database/connect';
import { errorMsgs } from '../../../services/error-handler';

const { ADMIN_REVIEW_SECTION } = appLinks;

const createSection = async ({ title, userId, topics, userOrganisationId }) => {
  if (!title || !userId || !topics.length || !userOrganisationId) {
    throw Boom.badRequest(errorMsgs.VALIDATION_ERROR);
  }

  const client = await getClient();
  try {
    await client.query('BEGIN');

    const section = await Sections.createSection(
      { title, createdBy: userId },
      client,
    );

    await Sections.createTopics({ sectionId: section.id, topics }, client);

    await Sections.createOrganisationSectionOrder(
      { sectionId: section.id, organisationId: userOrganisationId },
      client,
    );

    await client.query('COMMIT');

    const hydeAdmin = await Users.findSuperAdminByOrgUniqueSlug('hyde');
    sendEmail(
      templatesId.ADMIN_ORG_ADDED_A_NEW_SECTION,
      { to: hydeAdmin.email },
      {
        name: hydeAdmin.firstName,
        link: ADMIN_REVIEW_SECTION.replace(':id', section.id),
      },
    );

    return section;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

export default createSection;
