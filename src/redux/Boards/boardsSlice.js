import { createSlice } from '@reduxjs/toolkit';
import { getListOfBoards, addNewBoard, editBoard } from './boardsOperations';

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
      });
    // .addCase(getBoardById.fulfilled, (state, { payload }) => {
    //   console.log('slice', payload);

    // });
  },
});

export default boardsSlice.reducer;
