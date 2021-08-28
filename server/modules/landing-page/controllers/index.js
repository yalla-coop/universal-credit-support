import { Router } from 'express';

import getLandingPage from './get-landing-page';
import updateLandingPage from './update-landing-page';

import {
  authenticate,
  authorize,
  csrfProtection,
} from '../../../api/middlewares';

const router = Router();

router.get('/', getLandingPage);
router.patch(
  '/',
  csrfProtection,
  // authenticate(),
  // authorize(/* list admin + super admin here */),
  updateLandingPage,
);

export default router;
