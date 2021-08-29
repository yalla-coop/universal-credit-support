import { Router } from 'express';

import getMediaById from './get-media-by-id';
import getSignedURL from './get-signed-url';
import getMediaUrl from './get-media-url';

import { authenticate } from '../../../api/middlewares';

const router = Router();

router.get('/', authenticate(), getSignedURL);
router.get('/url', authenticate(), getMediaUrl);
router.get('/:id', authenticate(), getMediaById);

export default router;
