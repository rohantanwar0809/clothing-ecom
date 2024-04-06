import { combineReducers } from '@reduxjs/toolkit';
import { ProductsState } from '../types';
import productReducer from './slices/productSlice';

interface RootState {
  products: ProductsState;
  // Add other reducers here if needed
}

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;
