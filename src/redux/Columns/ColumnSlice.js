import { createSlice } from '@reduxjs/toolkit';
// <<<<<<< HEAD
// import { addColumn, editColumn, delColumn } from './ColumnOperation';
// =======
import { updateColumn, removeColumn } from './ColumnOperation';

const boardSlice = createSlice({
  name: 'column',
  initialState: {
    column: [],
  },
  extraReducers: builder => {
    builder
// <<<<<<< HEAD
//       .addCase(addColumn.fulfilled, (state, { payload }) => {
//         state.column = [12];
//       })
//       .addCase(editColumn.fulfilled, (state, { payload }) => {
//         console.log(payload);
//       })
//       .addCase(delColumn.fulfilled, (state, { payload }) => {
//         console.log(payload);
// =======
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
