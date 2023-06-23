import { createAsyncThunk } from '@reduxjs/toolkit';

import { getListOfBoardsApi } from '../../services/backendAPI';

export const getListOfBoards = createAsyncThunk(
  'boards/getListOfBoards',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    try {
      const boardsList = await getListOfBoardsApi(token);
      return boardsList;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      return Boolean(getState().boards.length <= 0);
    },
  },
);
