// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { setCookie, getCookie, deleteCookie } from "cookies-next";
// import {jwtDecode} from "jwt-decode"; // Import without curly braces

// interface AccountState {
//   token: string | null; 
//   userId: string | null;
//   role: string | null;
//   isLoggedIn: boolean;
// }

// const initialState: AccountState = {
//   token: null,
//   userId: null,
//   role: null,
//   isLoggedIn: false,
// };

// const accountSlice = createSlice({
//   name: "account",
//   initialState,
//   reducers: {
//     setToken(state, action: PayloadAction<string>) {
//       state.token = action.payload;
//       try {
//         const decodedToken: { user_id: string; role: string } = jwtDecode(action.payload);
//         state.userId = decodedToken.user_id;
//         state.role = decodedToken.role;
//         state.isLoggedIn = true;

//         setCookie("token", action.payload, {
//           httpOnly: true,
//           secure: process.env.NODE_ENV === "production", 
//           maxAge: 60 * 60 * 24, 
//           path: "/", 
//         });
//       } catch (error) {
//         console.error("Invalid token:", error);
//         state.token = null;
//         state.userId = null;
//         state.role = null;
//         state.isLoggedIn = false;

//         deleteCookie("token", { path: "/" });
//       }
//     },
//     clearToken(state) {
//       state.token = null;
//       state.userId = null;
//       state.role = null;
//       state.isLoggedIn = false;

     
//       deleteCookie("token", { path: "/" });
//     },
//     LogOut(state) {
//       state.token = null;
//       state.userId = null;
//       state.role = null;
//       state.isLoggedIn = false;

      
//       deleteCookie("token", { path: "/" });
//     },
//     initializeFromLocalStorage(state) {
//       const token = getCookie("token") as string | undefined; 
//       if (token) {
//         state.token = token;
//         try {
//           const decodedToken: { user_id: string; role: string } = jwtDecode(token);
//           state.userId = decodedToken.user_id;
//           state.role = decodedToken.role;
//           state.isLoggedIn = true;
//         } catch (error) {
//           console.error("Invalid token:", error);
//           state.token = null;
//           state.userId = null;
//           state.role = null;
//           state.isLoggedIn = false;

          
//           deleteCookie("token", { path: "/" });
//         }
//       } else {
//         state.isLoggedIn = false;
//       }
//     },
//   },
// });

// export const { setToken, clearToken, initializeFromLocalStorage, LogOut } = accountSlice.actions;
// export default accountSlice.reducer;
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

