import axios from 'axios';

axios.defaults.baseURL = 'https://taskpro.onrender.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUserApi = async userData => {
  const { data } = await axios.post('user/register', userData);
  token.set(data.token);
  return { ...data.user, token: data.token };
};

export const loginUserApi = async userData => {
  const { data } = await axios.post('user/login', userData);
  token.set(data.token);
  return { ...data.user, token: data.token };
};

export const currentUserApi = async userToken => {
  token.set(userToken);
  const { data } = await axios.get('user/current');
  return data;
};

export const logoutUserApi = async userToken => {
  await axios.post('user/logout', userToken);
  token.unset();
  return null;
};

export const themeChangeUserApi = async theme => {
  const { data } = await axios.patch('user/', theme);
  return data;
};

export const updateUserApi = async userData => {
  const { data } = await axios.patch('user/updateUserInfo', userData);
  return data;
};
//---------------------------------------------BOARDS---------------------//

export const getListOfBoardsApi = async userToken => {
  token.set(userToken);
  const { data } = await axios.get('/board/');
  return data;
};

// export const addColumn = async board => {
//   const { data } = await axios.post('board/column');
//   console.log(data);
//   return data;
// };

// export const editColumn = async board => {
//   const { data } = await axios.post('/board');
//   return data;
// };
