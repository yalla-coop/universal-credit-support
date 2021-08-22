import { Router } from 'express';
import Boom from '@hapi/boom';
import { errorMsgs } from '../services/error-handler';
import * as M from '../modules';

const router = Router();

router.use('/users', M.user.controllers);
router.use('/content-audit-log', M.contentAuditLog.controllers);
router.use('/landing-page', M.landingPage.controllers);
router.use('/media', M.media.controllers);
router.use('/organisation', M.organisation.controllers);
router.use('/step', M.step.controllers);

// catch 404 and forward to error handler
router.use((req, res, next) => {
  next(Boom.notFound(errorMsgs.NOT_FOUND));
});

export default router;
