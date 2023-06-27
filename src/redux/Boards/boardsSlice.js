import { createSlice } from '@reduxjs/toolkit';
import {
  getListOfBoards,
  addNewBoard,
  getBoardById,
  updateBoard,
} from './boardsOperations';

const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    allboards: [],
    currentboard: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getListOfBoards.fulfilled, (state, { payload }) => {
        state.allboards.push(...payload);
      })
      .addCase(addNewBoard.fulfilled, (state, { payload }) => {
        state.allboards.push(payload);
      })
      .addCase(getBoardById.fulfilled, (state, { payload }) => {
        state.currentboard = payload;
      })
      .addCase(updateBoard.fulfilled, (state, { payload }) => {
        state = payload;

      });
  },
});

export default boardsSlice.reducer;
