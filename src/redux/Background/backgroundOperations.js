import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBackgroundThumbnails } from '../../services/backendAPI';

export const getListOfThumbnails = createAsyncThunk(
  'boards/thumbnails',
  async (_, { rejectWithValue }) => {
    try {
      const thumbnailsList = await getBackgroundThumbnails();
      return thumbnailsList;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);