import { createSlice } from '@reduxjs/toolkit';
import { addColumn, editColumn, delColumn } from './ColumnOperation';
const boardSlice = createSlice({
  name: 'column',
  initialState: {
    column: [],
  },
  extraReducers: builder => {
    builder
      .addCase(addColumn.fulfilled, (state, { payload }) => {
        state.column = [12];
      })
      .addCase(editColumn.fulfilled, (state, { payload }) => {
        console.log(payload);
      })
      .addCase(delColumn.fulfilled, (state, { payload }) => {
        console.log(payload);
      });
  },
});

export default boardSlice.reducer;
