import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    error: null,
    userInfo: null,
  },
  reducers: {
    setAuthError(state, action) {
      state.authError = action.payload;
    },
    setUserInfo(state, action) {
      state.setUserInfo = action.payload;
    },
  },
});

export const { setAuthError, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
