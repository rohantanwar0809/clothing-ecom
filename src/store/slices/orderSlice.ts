import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OrderState, OrderType } from '../../types';

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<OrderType>) {
      state.orders.push(action.payload);
    },
    removeOrder(state, action: PayloadAction<string>) {
      const orderId = action.payload;
      state.orders = state.orders.filter((order) => order.id !== orderId);
    },
  },
});

export const { addOrder, removeOrder } = orderSlice.actions;

export default orderSlice.reducer;
