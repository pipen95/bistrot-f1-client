import axios from 'axios';

const logout = async () => {
  localStorage.removeItem("user");
  const res = await axios.get("/api/users/logout");
  return res.data;
};

const getCurrentUser = () => {
 return localStorage.getItem("user");
};

export default {
  logout,
  getCurrentUser,
};
