import { Router } from 'express';

import getSections from './get-sections';
import getSubSections from './get-sub-sections';
import getSection from './get-section';
import updateSection from './update-section';
import getTopicsBySectionId from './get-topics-by-section-id';
import createSection from './create-section';

import {
  authenticate,
  authorize,
  csrfProtection,
} from '../../../api/middlewares';
import { userRoles } from '../../../constants';

const router = Router();

router.get('/', getSections);
router.post(
  '/',
  authenticate(),
  authorize([userRoles.ADMIN, userRoles.SUPER_ADMIN]),
  createSection,
);

router.get('/sub-sections', getSubSections);

router.get('/:id', authenticate(true), getSection);
router.get('/:id/topics', getTopicsBySectionId);

router.patch(
  '/:id',
  csrfProtection,
  authenticate(),
  authorize([userRoles.SUPER_ADMIN, userRoles.ADMIN]),
  updateSection,
);

export default router;
