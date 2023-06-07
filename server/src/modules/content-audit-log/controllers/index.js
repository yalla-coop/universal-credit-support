import { Router } from 'express';

import getAuditLogs from './get-audit-logs';

import {
  authenticate,
  authorize,
  csrfProtection,
} from '../../../api/middlewares';

const router = Router();
router.get('/', csrfProtection, authenticate(), getAuditLogs);

router.patch(
  '/',
  csrfProtection,
  authenticate(),
  authorize(/* list admin + super admin here */),
  getAuditLogs,
);

export default router;
