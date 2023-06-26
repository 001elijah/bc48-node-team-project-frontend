import { createSlice } from '@reduxjs/toolkit';
import { getListOfBoards, addNewBoard } from './boardsOperations';

const boardsSlice = createSlice({
  name: 'boards',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(getListOfBoards.fulfilled, (state, { payload }) => {
        state.push(...payload);
      })
      .addCase(addNewBoard.fulfilled, (state, { payload }) => {
        state.push(payload)
      })
      // .addCase(getBoardById.fulfilled, (state, { payload }) => {
      //   console.log('slice', payload);

      // });
  },
});

export default boardsSlice.reducer;
