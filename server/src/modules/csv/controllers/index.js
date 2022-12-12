import { Router } from 'express';

import { authenticate, authorize } from '../../../api/middlewares';

import { userRoles } from '../../../constants';

import getOrganisationsCSV from './get-organisations-csv';

const router = Router();
router.get(
  '/organisations',
  authenticate(),
  authorize([userRoles.SUPER_ADMIN]),
  getOrganisationsCSV,
);

export default router;
