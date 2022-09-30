import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types & Interfaces
import { CartItem, CartState } from "~/interfaces/cart";
import type { RootState } from "~/app/store";

// State
const initialState: CartState = {
  items: [],
};

// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // Destrucutre the action payload
      const { name, price, quantity } = action.payload;

      // Check if the item already exists in the cart
      const item = state.items.find((i) => i.name === name);

      // If the item exists, update the quantity
      if (item) {
        item.quantity += 1;
        return;
      }

      // If the item doesn't exist, add it to the cart
      state.items.push({ name, price, quantity });
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      // Find the item in the cart
      const item = state.items.find((i) => i.name === action.payload);

      // If the item exists, increase the quantity
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      // Find the item in the cart
      const item = state.items.find((i) => i.name === action.payload);

      // If the item exists, decrease the quantity
      if (item) {
        // If the quantity is 1, remove the item from the cart
        if (item.quantity === 1) {
          state.items = state.items.filter((i) => i.name !== action.payload);
          return;
        }
        item.quantity -= 1;
      }
    },
  },
});

// Actions
export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

// Selectors
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) => {
  return state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Export reducer
export default cartSlice.reducer;
