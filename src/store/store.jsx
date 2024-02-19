import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../redux/features/productSlice";
import categorySlice from "../redux/features/categorySlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    category: categorySlice,
  },
});
