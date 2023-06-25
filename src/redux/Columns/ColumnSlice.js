import { createSlice } from '@reduxjs/toolkit';
import { addColumn } from './ColumnOperation';
const boardSlice = createSlice({
  name: 'board',
  initialState: {
    column: [],
  },
  extraReducers: builder => {
    builder.addCase(addColumn.fulfilled, (state, { payload }) => {
      state.column = [12];
    });
  },
});

export default boardSlice.reducer;
