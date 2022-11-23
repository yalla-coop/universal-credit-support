import { Router } from 'express';

import createOrganisation from './create-organisation';

import getOrganisation from './get-organisation';
import updateOrganisation from './update-organisation';
import getOrganisationByUniqueSlug from './get-organisation-by-unique-slug';
import getOrganisations from './get-organisations';

import {
  authenticate,
  authorize,
  // createCSRFToken,
  csrfProtection,
} from '../../../api/middlewares';
import { userRoles } from '../../../constants';
// import getCSRFToken from './get-csrf-token';

const router = Router();

router.get(
  '/',
  authenticate(),
  authorize([userRoles.SUPER_ADMIN]),
  getOrganisations,
);

router.get('/unique-slug/:uniqueSlug', getOrganisationByUniqueSlug);

router.get(
  '/:id',
  authenticate(),
  // authorize(/* org's admin only */),
  getOrganisation,
);
router.patch(
  '/:id',
  csrfProtection,
  authenticate(),
  authorize([userRoles.SUPER_ADMIN, userRoles.ADMIN]),
  updateOrganisation,
);
router.post(
  '/:id',
  csrfProtection,
  authenticate(),
  authorize([userRoles.SUPER_ADMIN, userRoles.ADMIN]),
  createOrganisation,
);

export default router;
