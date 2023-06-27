import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addColumnApi,
  removeColumnApi,
  editColumnApi

} from '../../services/backendAPI';

export const addColumn = createAsyncThunk(
  'column/addColumn',
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

export const editColumn = createAsyncThunk(
  'column/editColumn',
  async (editColumnTitle, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    try {
      const editColumn = await editColumnApi(editColumnTitle, token);
      return editColumn;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);
export const delColumn = createAsyncThunk(
  'column/delColumn',
  async (delData, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    try {
      const deleteColumn = await removeColumnApi(delData, token);
      return deleteColumn;

    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);


