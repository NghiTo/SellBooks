import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";
import cartSlice from "./cartSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartSlice,
  },
});

export default store;
