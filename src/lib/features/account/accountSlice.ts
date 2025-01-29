import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  userId: string | null;
  role: string | null;
  isLoggedIn: boolean;
}

const initialState: AccountState = {
  userId: null,
  role: null,
  isLoggedIn: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setSession(state, action: PayloadAction<{ userId: string; role: string }>) {
      state.userId = action.payload.userId;
      state.role = action.payload.role;
      state.isLoggedIn = true;
    },
    clearSession(state) {
      state.userId = null;
      state.role = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setSession, clearSession } = accountSlice.actions;
export default accountSlice.reducer;

