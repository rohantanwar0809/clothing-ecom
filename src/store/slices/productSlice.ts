import { createSlice } from '@reduxjs/toolkit';
import { ProductsState } from '../../types';

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  selectedProduct: {
    id: 1,
    title: '',
    displayTitle: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  },
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
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const {
  fetchProductsFailed,
  fetchProductsRequested,
  fetchProductsSucceeded,
  selectProduct,
} = productSlice.actions;
export default productSlice.reducer;
