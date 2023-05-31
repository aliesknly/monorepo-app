import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
    'user/fetchStatus',
    async (_, thunkAPI) => {
      /**
       * Replace this with your custom fetch call.
       * For example, `return myApi.getUsers()`;
       * Right now we just return an empty array.
       */
      return Promise.resolve([]);
    }
  );