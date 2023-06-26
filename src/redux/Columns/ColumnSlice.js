import { createSlice } from '@reduxjs/toolkit';
import { addColumn, updateColumn, removeColumn } from './ColumnOperation';
const boardSlice = createSlice({
  name: 'board',
  initialState: {
    column: [],
  },
  extraReducers: builder => {
    builder
      .addCase(updateColumn.fulfilled, (state, { payload }) => {
        return {
          state: state.map(el =>
            el.id !== payload.id ? el : { ...el, ...payload },
          ),
        };
      })
      .addCase(removeColumn.fulfilled, (state, { payload }) => {
        return {
          state: state.items.filter(el => el.id !== payload),
        };
      });
  },
});

export default boardSlice.reducer;
