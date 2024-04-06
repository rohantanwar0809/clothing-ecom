import { combineReducers } from '@reduxjs/toolkit';
import { CartState, ProductsState } from '../types';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';

interface RootState {
  products: ProductsState;
  cart: CartState;
  // Add other reducers here if needed
}

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
