import { Router } from 'express';
import Boom from '@hapi/boom';
import { errorMsgs } from '../services/error-handler';
import * as M from '../modules';

const router = Router();

router.use('/users', M.user.controllers);
router.use('/content-audit-logs', M.contentAuditLog.controllers);
router.use('/media', M.media.controllers);
router.use('/organisations', M.organisation.controllers);
router.use('/sections', M.section.controllers);
router.use('/csv', M.csv.controllers);

// catch 404 and forward to error handler
router.use((req, res, next) => {
  next(Boom.notFound(errorMsgs.NOT_FOUND));
});

export default router;
