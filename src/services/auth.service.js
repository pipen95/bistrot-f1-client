import Cookies from 'universal-cookie';

const cookies = new Cookies();

const setCookie = (data) => {
  cookies.set('user', data, { path: '/' });
};

const logout = async () => {
  cookies.set('user', null, {
    path: '/',
    expires: new Date(Date.now() - 10 * 1000),
  });
  window.location.reload(false);
};

const getCurrentUser = () => {
  return cookies.get('user');
};

export default {
  setCookie,
  logout,
  getCurrentUser,
};
