import { createSlice } from '@reduxjs/toolkit';
import { ProductsState } from '../../types';

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsRequested: (state) => {
      state.loading = true;
    },
    fetchProductsSucceeded: (state, action) => {
      state.products = action.payload.clothes;
      state.loading = false;
    },
    fetchProductsFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Optional: Set error message
    },
  },
});

export default productSlice.reducer;
