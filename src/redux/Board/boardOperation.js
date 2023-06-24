import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addColumn = createAsyncThunk(
  'board/column',
  async (value, thunkAPI) => {
    try {
      const response = await axios.post('/column', value);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
