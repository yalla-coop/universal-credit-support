import Boom from '@hapi/boom';
import uniqid from 'uniqid';
import config from '../../../config';

import * as User from '../model';
import * as Organisation from '../../organisation/model';

import { hashPassword, createOrgSlug } from '../../../helpers';
import { errorMsgs } from '../../../services/error-handler';
import { validateSignup } from '../utils';

import { userRoles } from '../../../constants';

import { getClient } from '../../../database/connect';
import sendEmail from '../../../services/mailing';
import * as templatesId from '../../../services/mailing/templates/templates-constants';

const signup = async ({
  firstName,
  lastName,
  email,
  backupEmail,
  password,
  organisationName,
  typeOfOrganisation,
  agreedOnTerms,
}) => {
  const client = await getClient();
  const { appUrl } = config.common;

  try {
    await client.query('BEGIN');

    await validateSignup({
      firstName,
      lastName,
      email,
      backupEmail,
      password,
      agreedOnTerms,
      organisationName,
      typeOfOrganisation,
      role: userRoles.ADMIN,
    });
    let slug = createOrgSlug(organisationName);

    const OrgWithSameSlugExists = await Organisation.findOrganisationBySlug(
      slug,
      client,
    );

    if (OrgWithSameSlugExists) {
      slug = `${slug}-${uniqid.time()}`;
    }

    const createdOrganisation = await Organisation.createOrganisation(
      {
        organisationName,
        typeOfOrganisation,
        uniqueSlug: slug,
      },
      client,
    );

    const hashedPassword = await hashPassword(password);
    const createdUser = await User.createUser(
      {
        firstName,
        lastName,
        email,
        backupEmail,
        password: hashedPassword,
        role: userRoles.ADMIN,
        organisationId: createdOrganisation.id,
      },
      client,
    );
    sendEmail(
      templatesId.SIGN_UP,
      { to: email },
      {
        name: firstName,
        link: `${appUrl}/${slug}`,
      },
    );
    await client.query('COMMIT');
    createdUser.password = null;
    return createdUser;
  } catch (error) {
    await client.query('ROLLBACK');

    if (Number(error.code) === 23505) {
      if (error.constraint === 'users_email_key') {
        throw Boom.conflict(errorMsgs.EMAIL_ALREADY_EXISTS, {
          field: 'email',
        });
      } else if (error.constraint === 'users_backup_email_key') {
        throw Boom.conflict(errorMsgs.EMAIL_ALREADY_EXISTS, {
          field: 'backupEmail',
        });
      }
    }

    throw error;
  } finally {
    client.release();
  }
};

export default signup;
