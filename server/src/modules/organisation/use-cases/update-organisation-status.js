import * as Organisation from '../model';
import sendEmail from '../../../services/mailing';
import * as templatesId from '../../../services/mailing/templates/templates-constants';
import * as User from '../../user/model';
import { organisationStatuses } from '../../../constants';
import config from '../../../config';

const updateOrganisationStatus = async ({ id, status, explanation }) => {
  const user = await User.findUserWithOrgDetails(id);
  const { uniqueSlug } = await Organisation.updateOrganisationStatus({
    id: user.organisationId,
    status,
  });
  const { appUrl } = config.common;
  if (status === organisationStatuses.APPROVED) {
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
