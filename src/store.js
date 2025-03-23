import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"; // Adjust path if needed

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
