import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("getProducts", async () => {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products?limit=200"
    );
    return response.data.products;
  } catch (error) {
    return error;
  }
});

export const getCategoryProducts = createAsyncThunk(
  "getCategoryProducts",
  async (category) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      return response.data.products;
    } catch (error) {
      return error;
    }
  }
);

export const getCategory = createAsyncThunk("getCategory", async () => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/categories`
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

export const getProductDetails = createAsyncThunk(
  "getProductDetails",
  async (id) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
