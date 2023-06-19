import axios from 'axios';

axios.defaults.baseURL = 'https://taskpro.onrender.com/user';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUserApi = async userData => {
  await axios.post('/register', userData);
  const { email, password } = userData;
  const login = await loginUserApi({ email, password });
  return { ...login };
};

export const loginUserApi = async userData => {
  const { data } = await axios.post('/login', userData);
  token.set(data.token);
  const user = await axios.get('/current');
  return { ...user.data, token: data.token };
};

export const currentUserApi = async userToken => {
  token.set(userToken);
  const { data } = await axios.get('/current');
  return data;
};

export const logoutUserApi = async token => {
  const { data } = await axios.post('/logout', token);
  console.log(data);
  return null;
};
