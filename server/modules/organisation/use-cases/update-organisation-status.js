import * as Organisation from '../model';
import sendEmail from '../../../services/mailing';
import * as templatesId from '../../../services/mailing/templates/templates-constants';
import { addDefaultSectionsForOrganisation } from '../../section/model';
import * as User from '../../user/model';
import { organisationStatuses } from '../../../constants';

const updateOrganisationStatus = async ({ id, status, explanation }) => {
  await Organisation.updateOrganisationStatus({ id, status });

  const user = await User.findUserWithOrgDetails(id);
  if (status === organisationStatuses.APPROVED) {
    await addDefaultSectionsForOrganisation({ organisationId: id });

    sendEmail(
      templatesId.ORG_APPROVED,
      { to: user.email },
      {
        name: user.firstName,
      },
    );
  } else if (status === organisationStatuses.REJECTED) {
    sendEmail(
      templatesId.ORG_REJECTED,
      { to: user.email },
      {
        name: user.firstName,
        explanation,
      },
    );
  }
};

export default updateOrganisationStatus;
