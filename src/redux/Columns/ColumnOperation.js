import { createAsyncThunk } from '@reduxjs/toolkit';
import {addColumnApi} from '../../services/backendAPI'

export const addColumn = createAsyncThunk(
  'board/addColumn',
    async (dataColumn, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    try {
      const newColumn = await addColumnApi(dataColumn, token);
      return newColumn;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);