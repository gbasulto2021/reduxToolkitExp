import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: [
    { id: 1, name: "Naranja", price: 100 },
    { id: 2, name: "Pera", price: 200 },
    { id: 3, name: "Limon", price: 300 },
    { id: 4, name: "Leche", price: 400 },
    { id: 5, name: "Arroz", price: 500 },
    { id: 6, name: "Tomate", price: 600 },
  ],
  cart: [],
};

export const shoppingSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let newItem = state.products.find((item) => item.id === action.payload);
      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      itemInCart
        ? (state.cart = state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ))
        : state.cart.push({ ...newItem, quantity: 1 });
    },
    removeOneFromCart: (state, action) => {
      let itemInCart = state.cart.find((item) => item.id === action.payload);
      itemInCart.quantity > 1
        ? (state.cart = state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ))
        : (state.cart = state.cart.filter(
            (item) => item.id !== action.payload
          ));
    },
    removeAllFromCart: (state, action) => {
        state.cart = state.cart.filter(item=> item.id !== action.payload)
    },
    clearCart: (state) => {
        state.cart = []
    },
  },
});

export const { addToCart, removeOneFromCart, removeAllFromCart, clearCart } =
  shoppingSlice.actions;

export default shoppingSlice.reducer;
