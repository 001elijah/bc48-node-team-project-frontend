import { createSlice } from '@reduxjs/toolkit';
import {
  getListOfBoards,
  addNewBoard,
  editBoard,
  removeBoard,
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
      .addCase(editBoard.fulfilled, (state, { payload }) => {
        state.allboards.splice(
          state.allboards.findIndex(({ _id }) => _id === payload._id),
          1,
          payload,
        );
      })
      .addCase(removeBoard.fulfilled, (state, { payload }) => {
        const boardId = payload;
        const index = state.allboards.findIndex(({ _id }) => _id === boardId);
        if (index !== -1) {
          state.allboards.splice(index, 1);
        }
      })
      // .addCase(getBoardById.fulfilled, (state, { payload }) => {
      //   console.log('slice', payload);
      //     state.allboards.push(payload);
      //   })
      .addCase(getBoardById.fulfilled, (state, { payload }) => {
        state.currentboard = payload;
      })
      .addCase(updateBoard.fulfilled, (state, { payload }) => {
        state = payload;
      });
  },
});

export default boardsSlice.reducer;
