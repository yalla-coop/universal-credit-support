import axios from 'axios';
import handleError from './format-error';

const USERS_BASE = '/users';

const signup = async (form, { options } = {}) => {
  try {
    // const { data } = await axios.post(`${USERS_BASE}/signup`, form);
    // return { data };
    return { form };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const login = async (form, { options } = {}) => {
  try {
    // const { data } = await axios.post(`${USERS_BASE}/login`, form);
    // return { data };
    return { form };
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

export { signup, login, logout };
