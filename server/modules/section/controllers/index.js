import { Router } from 'express';

import getSections from './get-sections';
import getSubSections from './get-sub-sections';
import getSection from './get-section';
import updateSection from './update-section';
import getTopicsBySectionId from './get-topics-by-section-id';
import createSection from './create-section';
import updateSectionsOrder from './update-sections-order';
import getAwaitingReviewSection from './get-awaiting-review-sections';
import updateSectionStatus from './update-section-status';

import {
  authenticate,
  authorize,
  csrfProtection,
} from '../../../api/middlewares';
import { userRoles } from '../../../constants';

const router = Router();

router.get('/', getSections);
router.get(
  '/awaiting-review',
  authenticate(),
  authorize([userRoles.SUPER_ADMIN]),
  getAwaitingReviewSection,
);
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
  '/order',
  csrfProtection,
  authenticate(),
  authorize([userRoles.SUPER_ADMIN, userRoles.ADMIN]),
  updateSectionsOrder,
);

router.patch(
  '/:id',
  csrfProtection,
  authenticate(),
  authorize([userRoles.SUPER_ADMIN, userRoles.ADMIN]),
  updateSection,
);
router.patch(
  '/:id/status',
  csrfProtection,
  authenticate(),
  authorize([userRoles.SUPER_ADMIN]),
  updateSectionStatus,
);

export default router;
