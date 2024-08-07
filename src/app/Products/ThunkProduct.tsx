import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "../../types/product";
type Tresponse = TProduct[];

export const ThunkProduct = createAsyncThunk(
  "products/fetchByCategoryPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<Tresponse>(
        `http://localhost:5000/products?cat_prefix=${prefix}`
      );

      console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      } else {
        return rejectWithValue("unexpected error occurred");
      }
    }
  }
);
