// store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      // Optionally check for duplicates or update quantity here
      state.items.push(action.payload);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    // Add additional reducers as needed
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
