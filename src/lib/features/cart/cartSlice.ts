import { Product } from '@/lib/types/global';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem extends Product {
  quantity: number;
}

// interface CartState {
//   cartItems: CartItem[];
// }

// const initialState: CartState = {
//   cartItems: [],
// };

const loadCartFromLocalStorage = (): CartItem[] => {
  if (typeof window !== 'undefined') {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

const saveCartToLocalStorage = (cartItems: CartItem[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: loadCartFromLocalStorage(),
  },
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item.id === newItem.id);
      
      if (existingItemIndex >= 0) {
        state.cartItems[existingItemIndex].quantity += newItem.quantity;
      } else {
        state.cartItems.push({ ...newItem, quantity: newItem.quantity });
      }

      saveCartToLocalStorage(state.cartItems);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== id);

      saveCartToLocalStorage(state.cartItems);
    },
    removeItemByOne: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item.id === id);
  
      if (existingItemIndex >= 0) {
        const item = state.cartItems[existingItemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1; 
        } else {
          state.cartItems.splice(existingItemIndex, 1);
        }
      }
  
      saveCartToLocalStorage(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      
      saveCartToLocalStorage(state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart, removeItemByOne, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
