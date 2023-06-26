import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addColumnApi,
  updateColumnApi,
  removeColumnApi,
} from '../../services/backendAPI';

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
  },
);

export const updateColumn = createAsyncThunk(
  'board/editColumn',
  async (id, data, { rejectWithValue }) => {
    try {
      const newColumn = await updateColumnApi(id, data);
      return newColumn;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const removeColumn = createAsyncThunk(
  'board/removeColumn',
  async (id, { rejectWithValue }) => {
    try {
      await removeColumnApi(id);
      return id;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);
