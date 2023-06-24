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
//---------------------------------------------BOARDS---------------------//

export const getListOfBoardsApi = async userToken => {
  token.set(userToken);
  const { data } = await axios.get('/board/');
  return data;
};

// export const getBoardInfoApi = async () => {
//   const { data } = await axios.get('/board');
//   return data;
// };

export const removeColumnApi = async columnId => {
  await axios.delete(`/board/column/${columnId}`);
  return;
};

export const updateCardColumnApi = async columnId => {
  const { data } = await axios.patch(`/card/column/${columnId}`);
  return data;
};

export const removeCardApi = async cardId => {
  await axios.delete(`/card/${cardId}`);
  return;
};
