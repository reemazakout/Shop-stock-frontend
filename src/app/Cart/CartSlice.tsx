import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../../types/product";
import { ThunkCart } from "./ThunkCart";

import { TLoading } from "../../types/SharedTypes";
import { toast } from "react-toastify";

export interface ICartInfo {
  items: { [key: string]: number }; // The type of this is signature { [key: number]: number }
  productFullInfo: TProduct[];
  Loading: TLoading;
  error: null | string;
}

const initialState: ICartInfo = {
  items: {}, // { id: 1, quantity: 2 }
  productFullInfo: [],
  Loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id] += 1;
      } else {
        state.items[id] = 1;
      }
    },

    quantityIncrement: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id] += 1;
        toast.success("Item added to cart");
      } else {
        state.items[id] = 1;
      }
    },

    quantityDecrement: (state, action) => {
      const id = action.payload;
      if (state.items[id] > 1) {
        state.items[id] -= 1;
      } else {
        delete state.items[id];
        state.productFullInfo = state.productFullInfo.filter(
          (item) => item.id !== id
        );
        toast.success("Item removed from cart !");
      }
    },

    removeItem: (state, action) => {
      delete state.items[action.payload];
      state.productFullInfo = state.productFullInfo.filter(
        (item) => item.id !== action.payload
      );
      toast.success("Item removed from cart");
    },
    cleanProductFullInfo: (state) => {
      state.productFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ThunkCart.pending, (state) => {
        state.Loading = "pending";
        state.error = null;
      })
      .addCase(ThunkCart.fulfilled, (state, action) => {
        state.Loading = "succeeded";
        state.productFullInfo = action.payload;
      })
      .addCase(ThunkCart.rejected, (state, action) => {
        state.Loading = "failed";
        if (action.payload && typeof action.payload === "string") {
          state.error = action.payload;
        }
      });
  },
});

export const {
  addToCart,
  quantityIncrement,
  quantityDecrement,
  removeItem,
  cleanProductFullInfo,
} = cartSlice.actions;
export default cartSlice.reducer;
