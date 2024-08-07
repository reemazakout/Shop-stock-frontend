import { createSlice } from "@reduxjs/toolkit";
import { Thunk } from "./Thunk";
import { TLoading } from "../../types/SharedTypes";
import { TCategory } from "../../types/CategoryTypes";

export interface ICategoriesState {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Thunk.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(Thunk.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.records = action.payload;
      })
      .addCase(Thunk.rejected, (state, action) => {
        state.loading = "failed";
        if (action.payload && typeof action.payload === "string") {
          state.error = action.payload;
        }
      });
  },
});

export default categoriesSlice.reducer;
export { Thunk };
