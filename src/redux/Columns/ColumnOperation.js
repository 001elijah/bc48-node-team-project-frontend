import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addColumnApi,
  updateColumnApi,
  removeColumnApi,
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

// export const editColumn = createAsyncThunk(
//   'column/editColumn',
//   async (editColumnTitle, { getState, rejectWithValue }) => {
//     const { token } = getState().auth;
//     try {
//       const editColumn = await editColumnApi(editColumnTitle, token);
//       return editColumn;
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   },
// );
// export const delColumn = createAsyncThunk(
//   'column/delColumn',
//   async (delData, { getState, rejectWithValue }) => {
//     const { token } = getState().auth;
//     try {
//       const deleteColumn = await removeColumnApi(delData, token);
//       return deleteColumn;

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
