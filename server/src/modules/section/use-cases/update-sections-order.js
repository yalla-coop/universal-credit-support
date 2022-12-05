import Boom from '@hapi/boom';
import * as Sections from '../model';
import { getClient } from '../../../database/connect';
import { errorMsgs } from '../../../services/error-handler';

const updateSectionsOrder = async ({
  sections,
  userOrganisationId,
  uniqueSlug,
}) => {
  const updatedSectionsIds = sections.map(({ id }) => id);

  const existingSections = await Sections.findSectionsByOrgSlug(uniqueSlug);
  // check if the user is the owner of the sections
  const isOwner = updatedSectionsIds.every((sectionId) => {
    return existingSections.find(
      (item) =>
        Number(item.id) === Number(sectionId) &&
        Number(item.organisationId) === Number(userOrganisationId),
    );
  });

  if (!isOwner) {
    throw Boom.badImplementation(errorMsgs.NOT_FOUND); // send error 500 to get in sentry
  }

  const client = await getClient();
  try {
    await client.query('BEGIN');

    const updatedSections = await Promise.all(
      sections.map((item) =>
        Sections.updateSectionOrder(
          {
            id: item.id,
            position: item.position,
            hidden: item.hidden,
            organisationId: userOrganisationId,
          },
          client,
        ),
      ),
    );

    await client.query('COMMIT');
    return updatedSections;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

export default updateSectionsOrder;
