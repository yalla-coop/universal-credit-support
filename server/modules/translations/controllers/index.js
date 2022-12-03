import { Router } from 'express';

import getCommon from './get-common';

const router = Router();

router.get('/common', getCommon);

export default router;
