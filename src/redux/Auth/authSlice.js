import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  currentUser,
  logoutUser,
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
    isLoading: false,
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
        isLoading: false,
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
        };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
        };
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
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
          isLoading: false,
          error: null,
        };
      })
      .addMatcher(
        action =>
          action.type.startsWith('auth') && action.type.endsWith('/fulfilled'),
        state => {
          state.isAuth = true;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addMatcher(
        action =>
          action.type.startsWith('auth') && action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        action =>
          action.type.startsWith('auth') && action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        },
      );
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
