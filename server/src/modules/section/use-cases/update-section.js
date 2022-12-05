import Boom from '@hapi/boom';
import * as Sections from '../model';
import { getClient } from '../../../database/connect';
import { errorMsgs } from '../../../services/error-handler';
import { formatTopics } from '../utils';
import { userRoles } from '../../../constants';
import updateSectionStatus from './update-section-status';

const updateSection = async ({
  id,
  title,
  userId,
  topics,
  userOrganisationId,
  role,
  approved,
}) => {
  const topicsToUpdate = topics
    .filter((t) => !t.new)
    .map((t) => ({ ...t, new: undefined }));
  const newTopics = topics.filter((t) => t.new);

  // check if the user is the owner of the section
  const sectionOrg = await Sections.findSectionWithOrgDetails(id);

  if (!sectionOrg) throw Boom.notFound(errorMsgs.NOT_FOUND);
  if (
    sectionOrg.organisationId !== userOrganisationId &&
    role !== userRoles.SUPER_ADMIN
  ) {
    throw Boom.badImplementation(errorMsgs.NOT_FOUND); // send error 500 to get in sentry
  }

  // check if the topic ids are correct
  topicsToUpdate.forEach((t) => {
    if (!sectionOrg.topicsIds.includes(t.id)) {
      throw Boom.badImplementation(errorMsgs.NOT_FOUND); // send error 500 to get in sentry
    }
  });

  const client = await getClient();
  try {
    await client.query('BEGIN');

    const section = await Sections.updateSection(
      {
        id,
        title,
        updatedBy: userId,
      },
      client,
    );

    if (approved) {
      await updateSectionStatus({
        id,
        status: 'APPROVED',
        organisationId: sectionOrg.organisationId,
      });
    }

    await Sections.deleteTopicsBySectionId(
      { sectionId: id, topicIdsToKeep: topicsToUpdate.map((t) => t.id) },
      client,
    );

    await Sections.createTopics(
      { sectionId: id, topics: formatTopics(newTopics) },
      client,
    );

    await Promise.all(
      formatTopics(topicsToUpdate).map((t) =>
        Sections.updateTopicById({ id: t.id, content: t.content }, client),
      ),
    );

    await client.query('COMMIT');
    return section;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

export default updateSection;
