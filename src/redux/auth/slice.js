import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "./operation";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.user;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = slice.reducer;
