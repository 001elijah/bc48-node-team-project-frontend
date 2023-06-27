import { createSlice } from '@reduxjs/toolkit';
import { getListOfThumbnails } from './backgroundOperations';

const initialState = {
  thumbnails: [],
  loading: false,
  error: null,
};

const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getListOfThumbnails.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getListOfThumbnails.fulfilled, (state, action) => {
        state.loading = false;
        state.thumbnails = action.payload;
      })
      .addCase(getListOfThumbnails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default backgroundSlice.reducer;
