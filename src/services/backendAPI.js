import axios from 'axios';

// axios.defaults.baseURL = 'https://taskpro.onrender.com/user';

axios.defaults.baseURL = 'http://localhost:3000/user';


const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUserApi = async userData => {
  const { data } = await axios.post('/register', userData);
  token.set(data.token);
  return { ...data.user, token: data.token };
};

export const loginUserApi = async userData => {
  const { data } = await axios.post('/login', userData);
  token.set(data.token);
  return { ...data.user, token: data.token };
};

export const currentUserApi = async userToken => {
  token.set(userToken);
  const { data } = await axios.get('/current');
  return data;
};

export const logoutUserApi = async userToken => {
  await axios.post('/logout', userToken);
  token.unset();
  return null;
};

export const themeChangeUserApi = async theme => {
  const { data } = await axios.patch('', theme);
  return data;
};

export const registerWithGoogleApi = async (data) => {
  const { credential } = data;
  const { idToken } = credential;
  const response = await axios.post('/register/google', { credential, idToken });
  token.set(response.data.token);
  return { ...response.data.user, token: response.data.token };
};

export const loginWithGoogleApi = async (data) => {
  const { credential } = data;
  const { idToken } = credential;
  const response = await axios.post('/login/google', { credential, idToken });
  token.set(response.data.token);
  return { ...response.data.user, token: response.data.token };
};




