import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "../../types/SharedTypes";
import { TProduct } from "../../types/product";
import { ThunkProduct } from "./ThunkProduct";

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

const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    cleanUp: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ThunkProduct.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(ThunkProduct.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.records = action.payload;
      })
      .addCase(ThunkProduct.rejected, (state, action) => {
        state.loading = "failed";
        if (action.payload && typeof action.payload === "string") {
          state.error = action.payload;
        }
      });
  },
});
export const { cleanUp } = ProductsSlice.actions;
export default ProductsSlice.reducer;
export { ThunkProduct };
