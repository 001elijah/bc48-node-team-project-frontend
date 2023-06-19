import { Notify } from 'notiflix';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { logOut } from './authSlice';

import {
  registerUserApi,
  loginUserApi,
  currentUserApi,
  logoutUserApi,
  themeChangeUserApi,
  // themeChangeUserApi
} from 'services/backendAPI';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (dataUser, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(dataUser);
      Notify.success('Welcome');
      return data;
    } catch (error) {
      const { status } = error.response.request;

      if (status === 409) {
        Notify.failure('Email already exists');
      } else if (status === 400) {
        Notify.failure(`Error`);
      } else if (status === 500) {
        Notify.failure('Server error');
      }
      return rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (dataUser, { rejectWithValue }) => {
    try {
      const userData = await loginUserApi(dataUser);
      Notify.success('Welcome');
      return userData;
    } catch (error) {
      const { status } = error.response.request;
      if (status === 401) {
        Notify.failure('Email or password is wrong');
      } else if (status === 400) {
        Notify.failure(`Error`);
      } else if (status === 500) {
        Notify.failure('Server error');
      }

      return rejectWithValue(error.message);
    }
  },
);

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, { getState, rejectWithValue, dispatch }) => {
    const { token } = getState().auth;
    try {
      const data = await currentUserApi(token);
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(logOut());
      }, 0);
      return rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { token } = getState().auth;
      return Boolean(token);
    },
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (token, { rejectWithValue }) => {
    try {
      await logoutUserApi(token);
      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const themeChangeUser = createAsyncThunk(
  'auth/themeChange',
  async (theme, { rejectWithValue }) => {
    try {
      await themeChangeUserApi({ theme });
      return theme;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
