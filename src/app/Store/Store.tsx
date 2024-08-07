import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "../Categories/CategoriesSlice";
import ProductsSlice from "../Products/ProductsSlice";
import cartSlice from "./../Cart/CartSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants";

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"], // تخزين حالة السلة مؤقتًا
};

// دمج الموديلات في rootReducer
const rootReducer = combineReducers({
  categories: CategoriesSlice,
  products: ProductsSlice,
  cart: persistReducer(cartPersistConfig, cartSlice),
});

const persistedReducer = persistReducer(
  { key: "root", storage, whitelist: ["cart"] },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

//typing foRootState و AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
