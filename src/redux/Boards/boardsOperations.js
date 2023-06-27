import { createAsyncThunk } from '@reduxjs/toolkit';


import {
  getListOfBoardsApi,
  addBoardApi,
  getBoardByIdApi,
} from '../../services/backendAPI';
import { getListOfCards } from 'redux/Cards/cardsOperations';


export const addNewBoard = createAsyncThunk(
  'boards/addboard',
  async (dataBoard, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    try {
      const newBoard = await addBoardApi(dataBoard, token);
      return newBoard;
    } catch (error) {
      console.log('error', error);
      rejectWithValue(error.message);
    }
  },
);

export const getBoardById = createAsyncThunk(
  'boards/getBoardById',
  async (id, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    try {
      const currentBoard = await getBoardByIdApi(id, token);
      return currentBoard;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
  // {
  //   condition(_, { getState }) {
  //     return Boolean(getState().boards.length <= 0);
  //   },
  // },
);

export const getListOfBoards = createAsyncThunk(
  'boards/getListOfBoards',
  async (_, { getState, rejectWithValue, dispatch }) => {
    const { token } = getState().auth;
    try {
      const boardsList = await getListOfBoardsApi(token);
      setTimeout(() => {
        dispatch(getListOfCards())
      }, 0);
      return boardsList;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
  // {
  //   condition(_, { getState }) {
  //     return Boolean(getState().boards.length <= 0);
  //   },
  // },
);

export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async (dataBoard, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    try {
      const update = await updateBoardApi(dataBoard, token);
      return update;
    } catch (error) {
      console.log('error', error);
      rejectWithValue(error.message);
    }
  },
);
