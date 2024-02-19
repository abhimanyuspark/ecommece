import { createSlice } from "@reduxjs/toolkit";
import { getCategoryProducts, getCategory } from "../services/getProduct";

const initialState = {
  loading: false,
  error: null,
  categoryProducts: [],
  category: [],
  isCateLoding: false,
  isCateError: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getCategoryProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryProducts = action?.payload;
      })
      .addCase(getCategoryProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.error?.message;
      })

      .addCase(getCategory.pending, (state) => {
        state.isCateLoding = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isCateLoding = false;
        state.category = action?.payload;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.isCateLoding = false;
        state.isCateError = action?.error?.message;
      });
  },
});

export default categorySlice.reducer;
