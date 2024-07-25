import { createSlice } from "@reduxjs/toolkit";

// Helper function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Helper function to save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (err) {
    // Handle errors
  }
};

const initialState = loadState() || {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.total -= existingItem.price * existingItem.quantity;
        existingItem.quantity += action.payload.quantity;
        state.total += existingItem.price * existingItem.quantity;
      } else {
        state.items.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
      saveState(state); // Save state to localStorage
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex > -1) {
        state.total -=
          state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
        saveState(state); // Save state to localStorage
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        state.total -= item.price * item.quantity;
        item.quantity = quantity;
        state.total += item.price * item.quantity;
        saveState(state); // Save state to localStorage
      }
    },
    resetCart: (state) => {
      state.items = [];
      state.total = 0;
      saveState(state); // Save state to localStorage
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;
