import axios from 'axios';

const logout = async () => {
  localStorage.removeItem("user");
  const res = await axios.post("/api/users/logout");
  return res.data;
};

const getCurrentUser = () => {
  localStorage.getItem("user");
};

export default {
  logout,
  getCurrentUser,
};
