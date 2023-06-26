import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authSlice';
import loaderReducer from './Loader/loaderSlice';
import boardsReducer from './Boards/boardsSlice';
import cardsReducer from './Cards/cardsSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    boards: boardsReducer,
    cards: cardsReducer,
    isLoading: loaderReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
