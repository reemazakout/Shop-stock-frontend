import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "../Store/Store";

const getCartQuantity = createSelector(
  // I used creat selector to make a lestine up like the use of use callback and memo  , also to prevent the too many renders and requests
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return totalQuantity;
  }
);

export { getCartQuantity };
