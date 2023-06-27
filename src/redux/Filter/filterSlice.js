import { createSlice } from '@reduxjs/toolkit';

import { addFilters } from './filterOperation';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  extraReducers: builder => {
    builder
      .addCase(addFilters.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addMatcher(
        action =>
          action.type.startsWith('card') && action.type.endsWith('/rejected'),
        // (state, { payload }) => {
        //   state.isLoading = false;
        //   state.error = payload;
        // },
      )
      .addMatcher(
        action =>
          action.type.startsWith('card') && action.type.endsWith('/pending'),
        // state => {
        //   state.isLoading = true;
        // },
      );
  },
});

export default filterSlice.reducer;
