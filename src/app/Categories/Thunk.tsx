import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
type Tresponse = {
  id: number;
  title: string;
  img: string;
  prefix: string;
}[];

export const Thunk = createAsyncThunk("categories", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get<Tresponse>(
      "http://localhost:5000/categories"
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    } else {
      return rejectWithValue("unexpected error occurred");
    }
  }
});
