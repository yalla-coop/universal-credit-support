import axios from 'axios';
import handleError from './format-error';

const USERS_BASE = '/users';

const getUserById = async ({ id, options }) => {
  try {
    const { data } = await axios.get(`${USERS_BASE}/${id}`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const updateUserRole = async (updates, { options } = {}) => {
  try {
    const { data } = await axios.patch(
      `${USERS_BASE}/update-user-role`,
      updates
    );
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};
const getAdminUsers = async () => {
  try {
    const { data } = await axios.get(`${USERS_BASE}/admin-users`);
    return { data };
  } catch (error) {
    const err = handleError(error);
    return { error: err };
  }
};

const getLoggedInUserInfo = async ({ options } = {}) => {
  try {
    const { data } = await axios.get(`${USERS_BASE}/my-info`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const signup = async (form, { options } = {}) => {
  try {
    const { data } = await axios.post(`${USERS_BASE}/signup`, form);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const login = async (form, { options } = {}) => {
  try {
    const { data } = await axios.post(`${USERS_BASE}/login`, form);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const logout = async ({ options } = {}) => {
  try {
    await axios.post(`${USERS_BASE}/logout`);
    return {};
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const resetPasswordLink = async (emailForm, { options } = {}) => {
  try {
    await axios.post(`${USERS_BASE}/reset-password-link`, emailForm);
    return {};
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const updatePassword = async (data, { options } = {}) => {
  try {
    await axios.post(`${USERS_BASE}/update-password`, data);
    return {};
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getCSRFToken = async ({ options } = {}) => {
  try {
    const { data } = await axios.get(`${USERS_BASE}/get-csrf-token`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export {
  getUserById,
  getLoggedInUserInfo,
  signup,
  login,
  logout,
  resetPasswordLink,
  updatePassword,
  getCSRFToken,
  getAdminUsers,
  updateUserRole,
};
