import { createAsyncThunk } from '@reduxjs/toolkit';

import { getListOfBoardsApi,addBoardApi } from '../../services/backendAPI';


export const addNewBoard = createAsyncThunk(
  'boards/addboard',
    async (dataBoard, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    try {
      const newBoard = await addBoardApi(dataBoard, token);
      return newBoard;
    } catch (error) {
      console.log('error', error)
      rejectWithValue(error.message);
    }
  }
);

// export const getBoardById = createAsyncThunk(
//   'boards/getBoardById',
//   async (id, { getState, rejectWithValue }) => {
//     const { token } = getState().auth;
//     console.log('id oper', id)
//     try {
//       const boardsList = await getBoardByIdApi(id, token);
//       return boardsList;
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   },
  // {
  //   condition(_, { getState }) {
  //     return Boolean(getState().boards.length <= 0);
  //   },
  // },
// );

export const getListOfBoards = createAsyncThunk(
  'boards/getListOfBoards',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    try {
      const boardsList = await getListOfBoardsApi(token);
      return boardsList;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      return Boolean(getState().boards.length <= 0);
    },
  },
);