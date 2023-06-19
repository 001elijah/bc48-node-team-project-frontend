import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  registerUserApi,
  loginUserApi,
  currentUserApi,
  logoutUserApi,
} from 'services/backendAPI';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (dataUser, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(dataUser);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (dataUser, { rejectWithValue }) => {
    try {
      const userData = await loginUserApi(dataUser);
      return userData;
    } catch (error) {
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
        dispatch(logoutUser(token));
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
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    try {
      await logoutUserApi(token);
      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
