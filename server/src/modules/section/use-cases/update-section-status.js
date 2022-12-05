import * as Section from '../model';
import sendEmail from '../../../services/mailing';
import * as templatesId from '../../../services/mailing/templates/templates-constants';
import * as Organisation from '../../organisation/model';
import { SectionStatuses } from '../../../constants';

const updateSectionStatus = async ({
  id,
  status,
  explanation,
  organisationId,
}) => {
  await Section.updateSectionOrder({
    id,
    organisationId,
    approvalStatus: status,
  });

  const user = await Organisation.findOrganisationsWithUserByOrgId(
    organisationId,
  );
  if (status === SectionStatuses.APPROVED) {
    sendEmail(
      templatesId.SECTION_APPROVED,
      { to: user.email },
      {
        name: user.firstName,
      },
    );
  } else if (status === SectionStatuses.REJECTED) {
    sendEmail(
      templatesId.SECTION_REJECTED,
      { to: user.email },
      {
        name: user.firstName,
        explanation,
      },
    );
  }
};

export default updateSectionStatus;
