import { createAsyncThunk } from '@reduxjs/toolkit';

export const addFilters = createAsyncThunk(
  'filter/adfilter',
  async (data, { rejectWithValue }) => {
    try {
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);
