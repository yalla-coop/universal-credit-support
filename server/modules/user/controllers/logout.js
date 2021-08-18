import { TOKEN_NAME } from '../../../constants';

const logout = (req, res) => {
  res.clearCookie(TOKEN_NAME);
  res.send();
};

export default logout;
