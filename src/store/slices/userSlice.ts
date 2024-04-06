import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../screens/ProductDetails";

export interface UserState {
  name: string;
  email: string;
  currentViewingProduct: Product | null;
}

const initialState: UserState = {
  name: "Test User",
  email: "test@test.com",
  currentViewingProduct: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (
      state,
      action: PayloadAction<{
        name: string;
        email: string;
      }>
    ) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },

    setCurrentViewingProduct: (
      state,
      action: PayloadAction<Product | null>
    ) => {
      state.currentViewingProduct = action.payload;
    },
  },
});

export const { setUserDetails, setCurrentViewingProduct } = userSlice.actions;

export default userSlice.reducer;
