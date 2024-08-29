import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "../../types/SharedTypes";
import { TProduct } from "../../types/product";
import { ThunkAllProduct } from "./ThunkAllProduct";

export interface IProducrsState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IProducrsState = {
  records: [],
  loading: "idle",
  error: null,
};

const AllProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    cleanUp: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ThunkAllProduct.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(ThunkAllProduct.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.records = action.payload;
      })
      .addCase(ThunkAllProduct.rejected, (state, action) => {
        state.loading = "failed";
        if (action.payload && typeof action.payload === "string") {
          state.error = action.payload;
        }
      });
  },
});

export const { cleanUp } = AllProductsSlice.actions;
export default AllProductsSlice.reducer;
export { ThunkAllProduct };
