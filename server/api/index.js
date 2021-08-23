import { Router } from 'express';
import { errorMsgs } from '../services/error-handler';
import * as M from '../modules';

const router = Router();

router.use('/users', M.user.controllers);
router.use('/content-audit-logs', M.contentAuditLog.controllers);
router.use('/landing-pages', M.landingPage.controllers);
router.use('/media', M.media.controllers);
router.use('/organisations', M.organisation.controllers);
router.use('/steps', M.step.controllers);

// catch 404 and forward to error handler
router.use((req, res, next) => {
  next(errorMsgs.NOT_FOUND);
});

export default router;
