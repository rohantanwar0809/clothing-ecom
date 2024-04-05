import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  email: string;
}

const initialState: UserState = {
  name: "Test User",
  email: "test@test.com",
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
  },
});

export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;
