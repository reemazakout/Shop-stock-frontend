import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "../../types/product";
import { RootState } from "../Store/Store";

type TResponse = TProduct[];

export const ThunkCart = createAsyncThunk(
  "cart/ThunkCart",
  async (_, thunkAPI) => {
    const { getState, rejectWithValue } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsId = Object.keys(cart.items);
    if (itemsId.length === 0) {
      return [];
    }

    try {
      const concatenatedId = itemsId.map((el) => `id=${el}`).join("&");

      const response = await axios.get<TResponse>(
        `http://localhost:5000/products?${concatenatedId}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      } else {
        return rejectWithValue("Unexpected error occurred");
      }
    }
  }
);
