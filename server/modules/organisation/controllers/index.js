import { Router } from 'express';

import createOrganisation from './create-organisation';

import getOrganisation from './get-organisation';
import updateOrganisation from './update-organisation';
import getHelpDetails from './get-help-details';

import {
  authenticate,
  authorize,
  // createCSRFToken,
  csrfProtection,
} from '../../../api/middlewares';
// import getCSRFToken from './get-csrf-token';

const router = Router();

router.get('/help', getHelpDetails);
router.get(
  '/:id',
  // authenticate(),
  // authorize(/* org's admin only */),
  getOrganisation,
);
router.patch(
  '/:id',
  csrfProtection,
  // authenticate(),
  // authorize(/* org's admin only */),
  updateOrganisation,
);
router.post(
  '/:id',
  csrfProtection,
  authenticate(),
  authorize(/* admin */),
  createOrganisation,
);

export default router;
