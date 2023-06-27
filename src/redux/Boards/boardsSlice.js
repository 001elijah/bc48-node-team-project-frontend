import { createSlice } from '@reduxjs/toolkit';
import {
  getListOfBoards,
  addNewBoard,
  editBoard,
  removeBoard,
} from './boardsOperations';

const boardsSlice = createSlice({
  name: 'boards',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(getListOfBoards.fulfilled, (state, { payload }) => {
        state.push(...payload);
      })
      .addCase(addNewBoard.fulfilled, (state, { payload }) => {
        state.push(payload);
      })
      .addCase(editBoard.fulfilled, (state, { payload }) => {
        state.splice(
          state.findIndex(({ _id }) => _id === payload._id),
          1,
          payload,
        );
      })
      .addCase(removeBoard.fulfilled, (state, { payload }) => {
        const boardId = payload;
        const index = state.findIndex(({ _id }) => _id === boardId);
        if (index !== -1) {
          state.splice(index, 1);
        }
      });
    // .addCase(getBoardById.fulfilled, (state, { payload }) => {
    //   console.log('slice', payload);

    // });
  },
});

export default boardsSlice.reducer;
