import * as Organisation from '../model';
import sendEmail from '../../../services/mailing';
import * as templatesId from '../../../services/mailing/templates/templates-constants';
import { addDefaultSectionsForOrganisation } from '../../section/model';
import * as User from '../../user/model';
import { organisationStatuses } from '../../../constants';
import config from '../../../config';

const updateOrganisationStatus = async ({ id, status, explanation }) => {
  const { uniqueSlug } = await Organisation.updateOrganisationStatus({
    id,
    status,
  });
  const { appUrl } = config.common;

  const user = await User.findUserWithOrgDetails(id);
  if (status === organisationStatuses.APPROVED) {
    await addDefaultSectionsForOrganisation({ organisationId: id });

    sendEmail(
      templatesId.ORG_APPROVED,
      { to: user.email },
      {
        name: user.firstName,
        link: `${appUrl}/${uniqueSlug}`,
      },
    );
  } else if (status === organisationStatuses.REJECTED) {
    sendEmail(
      templatesId.ORG_REJECTED,
      { to: user.email },
      {
        name: user.firstName,
        rejection_reasons: explanation,
      },
    );
  }
};

export default updateOrganisationStatus;
