import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./features/cart/cartSlice"
import accountReducer from "./features/account/accountSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
        cart: cartReducer,
        account: accountReducer,
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']