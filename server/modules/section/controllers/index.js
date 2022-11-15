import { Router } from 'express';

import getSections from './get-sections';
import getSection from './get-section';
import updateSection from './update-section';
import getTopicsBySectionId from './get-topics-by-section-id';

import {
  authenticate,
  authorize,
  csrfProtection,
} from '../../../api/middlewares';
import { userRoles } from '../../../constants';

const router = Router();

router.get('/', getSections);

router.get('/:id', getSection);
router.get('/:id/topics', getTopicsBySectionId);

router.patch(
  '/:id',
  csrfProtection,
  authenticate(),
  authorize([userRoles.SUPER_ADMIN]),
  updateSection,
);

export default router;
