import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
