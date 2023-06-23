import { createSlice } from '@reduxjs/toolkit';
import {
  getListOfBoards
} from './boardsOperations';

const boardsSlice = createSlice({
  name: 'boards',
  initialState: [],
  extraReducers: builder => {
    builder.addCase(getListOfBoards.fulfilled, (state, { payload }) => {
      state.boards = payload;
    });
  },
});

export default boardsSlice.reducer;
