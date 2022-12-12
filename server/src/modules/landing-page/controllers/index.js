import { Router } from 'express';

import getLandingPage from './get-landing-page';
import updateLandingPage from './update-landing-page';

import {
  authenticate,
  authorize,
  csrfProtection,
} from '../../../api/middlewares';
import { userRoles } from '../../../constants';

const router = Router();

router.get('/', getLandingPage);
router.patch(
  '/',
  csrfProtection,
  authenticate(),
  authorize([userRoles.SUPER_ADMIN]),
  updateLandingPage,
);

export default router;
