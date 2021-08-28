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
import getAdminUsers from './get-admin-users';
import deleteUser from './delete-user';

import {
  authenticate,
  authorize,
  createCSRFToken,
  csrfProtection,
} from '../../../api/middlewares';

const router = Router();

router.get('/my-info', authenticate(), getUserInfo);

router.get('/get-csrf-token', createCSRFToken, getCSRFToken);
router.get(
  '/',
  authenticate(),
  authorize([
    /* super admin */
  ]),
  getUsers,
);
router.get('/admin-users', getAdminUsers);
router.patch('/update-user-role', csrfProtection, authenticate(), updateUser);
router.post('/signup', csrfProtection, signup);
router.post('/login', csrfProtection, login);
router.post('/logout', csrfProtection, logout);
router.post('/reset-password-link', csrfProtection, resetPasswordLink);
router.post('/update-password', csrfProtection, updatePassword);

router.delete('/delete-user', deleteUser);

export default router;
