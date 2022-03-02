import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const setCookie = (data) => {
  cookies.set("user", data, { path: '/' });
}

const logout = async () => {
  const res = await axios.get("/api/users/logout");
  if (res) {
    cookies.set("user", null, { path: '/' , expires : new Date(Date.now() -10 * 1000)});
    window.location.reload(false);
  } else {
    console.log("an error has occured !");
  }
};

const getCurrentUser = () => {
  return cookies.get('user');
};

export default {
  setCookie,
  logout,
  getCurrentUser,
};
