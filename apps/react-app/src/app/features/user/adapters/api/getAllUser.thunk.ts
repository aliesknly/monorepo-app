import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URI = import.meta.env.API_URL_BASE;

export const getAllUserThunk = createAsyncThunk(
  'user/fetchStatus',
  async (_, thunkAPI) => {
    const response = await axios.get(`${API_BASE_URI}/user`);
    return response.data;
  }
);
