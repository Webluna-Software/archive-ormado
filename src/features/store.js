import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishSlice from "./wishSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish:wishSlice,
  }
});