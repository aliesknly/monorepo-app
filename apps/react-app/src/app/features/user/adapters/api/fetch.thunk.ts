import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../../utils';

export const fetchUser = createAsyncThunk(
  'user/fetchStatus',
  async (_, thunkAPI) => {
    const response = await axiosInstance.get(`/user`);

    return response.data;
  }
);
