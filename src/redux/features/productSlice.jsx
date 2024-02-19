import { createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  getProductDetails,
  getCategoryProducts,
} from "../services/getProduct";

const initialState = {
  loading: false,
  products: [],
  error: "",
  productDetails: {},
  carts: [],
  search: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const newItem = action?.payload;
      // Check if the newItem already exists in the carts array
      const isItemExists = state.carts.some((item) => item.id === newItem.id);
      if (!isItemExists) {
        // If the item doesn't exist, push it to the carts array
        state.carts.push(newItem);
      }
    },

    removeCart: (state, action) => {
      state.carts = state.carts.filter((f) => f.id !== action?.payload);
    },

    setSearch: (state, action) => {
      state.search = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action?.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.error?.message;
      })

      .addCase(getProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action?.payload;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.error?.message;
      });
  },
});

export const { addCart, removeCart, setSearch } = productSlice.actions;

export default productSlice.reducer;
