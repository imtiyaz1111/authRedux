import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.token = "";
      localStorage.removeItem("auth");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
