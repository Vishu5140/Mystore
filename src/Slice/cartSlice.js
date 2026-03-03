import { createSlice } from "@reduxjs/toolkit";


const savedCart = localStorage.getItem("cartItems");

const initialState = {
  items: savedCart ? JSON.parse(savedCart) : [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (product) => product.id === item.id
      );

      if (existingItem) {
        // If product already exists → increase quantity
        existingItem.quantity += item.quantity;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          ...item,
          quantity: item.quantity,
          totalPrice: item.price * item.quantity,
        });
      }

      // Update cart totals
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );

      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    removeToCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );

      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    placeOrder:(state)=>{
      state.items=[];
      state.totalQuantity=0;
      state.totalPrice=0;
      localStorage.removeItem("cartItems");
    }
  },
});

export const { addToCart, removeToCart,placeOrder } = cartSlice.actions;
export default cartSlice.reducer;