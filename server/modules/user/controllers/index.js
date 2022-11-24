import { Router } from 'express';

import signup from './signup';
import login from './login';
import logout from './logout';
import getUserInfo from './get-user-info';
import resetPasswordLink from './reset-password-link';
import updatePassword from './update-password';
import getUsers from './get-users';
import updateUser from './update-user';
import getCSRFToken from './get-csrf-token';
import deleteUser from './delete-user';
import getUserById from './get-user-by-id';

import {
  authenticate,
  authorize,
  createCSRFToken,
  csrfProtection,
} from '../../../api/middlewares';

import { userRoles } from '../../../constants';

const router = Router();

router.get('/my-info', authenticate(), getUserInfo);

router.get('/get-csrf-token', createCSRFToken, getCSRFToken);
router.get('/', authenticate(), authorize([userRoles.SUPER_ADMIN]), getUsers);
router.patch(
  '/',
  csrfProtection,
  authenticate(),
  authorize([userRoles.SUPER_ADMIN]),
  updateUser,
);
router.post('/signup', csrfProtection, signup);
router.post('/login', csrfProtection, login);
router.post('/logout', csrfProtection, logout);
router.post('/reset-password-link', csrfProtection, resetPasswordLink);
router.post('/update-password', csrfProtection, updatePassword);

router.delete(
  '/',
  csrfProtection,
  authenticate(),
  authorize([userRoles.SUPER_ADMIN]),
  deleteUser,
);

router.get(
  '/:id',
  authenticate(),
  authorize([userRoles.SUPER_ADMIN]),
  getUserById,
);

export default router;
