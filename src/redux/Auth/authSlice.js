import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  currentUser,
  logoutUser,
  themeChangeUser,
  updateUser,
} from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    token: null,
    userName: null,
    email: null,
    theme: null,
    avatarUrl: null,
    error: null,
  },
  reducers: {
    logOut() {
      return {
        isAuth: false,
        token: null,
        userName: null,
        email: null,
        theme: null,
        avatarUrl: null,
        error: null,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isAuth: true,
        };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isAuth: true,
        };
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isAuth: true,
        };
      })
      .addCase(logoutUser.fulfilled, () => {
        return {
          isAuth: false,
          token: null,
          userName: null,
          email: null,
          theme: null,
          avatarUrl: null,
          error: null,
        };
      })
      .addCase(themeChangeUser.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.theme = payload;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        console.log(payload)
        return {
          ...state,
          ...payload,
        };
      })
      .addMatcher(
        action =>
          action.type.startsWith('auth') && action.type.endsWith('/fulfilled'),
        state => {
          state.error = null;
        },
      )
      .addMatcher(
        action =>
          action.type.startsWith('auth') && action.type.endsWith('/pending'),
        state => {
          state.error = null;
        },
      )
      .addMatcher(
        action =>
          action.type.startsWith('auth') && action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.error = payload;
        },
      );
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
