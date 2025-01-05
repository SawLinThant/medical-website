import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode";

interface AccountState {
  token: string | null;
  userId: string | null;
  email: string | null;
  isLoggedIn: boolean;
}

const initialState: AccountState = {
  token: null,
  userId: null,
  email: null,
  isLoggedIn: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;     
      try {
        const decodedToken: { userId: string; email: string } = jwtDecode(action.payload);
        state.userId = decodedToken.userId;
        state.email = decodedToken.email;
        state.isLoggedIn = true;
      } catch (error) {
        console.error("Invalid token:", error);
        state.token = null;
        state.userId = null;
        state.email = null;
        state.isLoggedIn = false;
      }
    },
    clearToken(state) {
      state.token = null;
      state.userId = null;
      state.email = null;
    },
    initializeFromLocalStorage(state) {
      const token = localStorage.getItem("token");
      if (token) {
        state.token = token;
        try {
          const decodedToken: { userId: string; email: string } = jwtDecode(token);
          state.userId = decodedToken.userId;
          state.email = decodedToken.email;
        } catch (error) {
          console.error("Invalid token:", error);
          state.token = null;
          state.userId = null;
          state.email = null;
        }
      }
    },
  },
});

export const { setToken, clearToken, initializeFromLocalStorage } = accountSlice.actions;
export default accountSlice.reducer;
