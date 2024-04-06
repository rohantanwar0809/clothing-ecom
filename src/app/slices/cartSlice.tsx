import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import { CartState } from '../../types';

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
