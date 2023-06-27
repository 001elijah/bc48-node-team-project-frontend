import { createSlice } from '@reduxjs/toolkit';
import { getListOfBoards, addNewBoard, getBoardById } from './boardsOperations';

const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    allboards:[],
    currentboard:null
  },
  extraReducers: builder => {
    builder
      .addCase(getListOfBoards.fulfilled, (state, { payload }) => {
        state.allboards.push(...payload);

      })
      .addCase(addNewBoard.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.push(payload);
      })
    .addCase(getBoardById.fulfilled, (state, { payload }) => {
      state.currentboard=payload;
    });
  },
});

export default boardsSlice.reducer;
