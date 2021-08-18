import { Router } from 'express';
import { errorMsgs } from '../services/error-handler';
import * as M from '../modules';

const router = Router();

router.use('/users', M.user.controllers);

// catch 404 and forward to error handler
router.use((req, res, next) => {
  next(errorMsgs.NOT_FOUND);
});

export default router;
