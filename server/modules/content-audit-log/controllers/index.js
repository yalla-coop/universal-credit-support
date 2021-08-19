import { Router } from 'express';

import getAuditLog from './get-audit-log';

import {
  authenticate,
  authorize,
  csrfProtection,
} from '../../../api/middlewares';

const router = Router();

router.patch(
  '/',
  csrfProtection,
  authenticate(),
  authorize(/* list admin + super admin here */),
  getAuditLog,
);

export default router;
