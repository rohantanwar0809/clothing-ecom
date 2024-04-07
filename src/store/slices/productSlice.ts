import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsState } from "../../types";

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsRequested: (
      state,
      action: PayloadAction<{
        query?: string;
        sortBy?: {
          type: string;
          order: string;
        };
      }>
    ) => {
      state.loading = true;
      if (action?.payload?.query) {
        state.query = action?.payload?.query ?? "";
      }
      if (action?.payload?.sortBy) {
        state.sortBy = action?.payload?.sortBy ?? {
          type: "price",
          order: "ASC",
        };
      }
    },
    fetchProductsSucceeded: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    fetchProductsFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Optional: Set error message
    },
  },
});

export const {
  fetchProductsRequested,
  fetchProductsSucceeded,
  fetchProductsFailed,
} = productSlice.actions;

export default productSlice.reducer;
