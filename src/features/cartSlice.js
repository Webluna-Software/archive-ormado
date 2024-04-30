import { createSlice } from "@reduxjs/toolkit";

const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const initialState = {
  products: initialCartItems,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingProductIndex = state.products.findIndex((product) => product._id === productToAdd._id);

      if (existingProductIndex !== -1) {
        // Product already exists in the cart, update its quantity
        state.products[existingProductIndex].quantity += productToAdd.quantity;
      } else {
        // Product does not exist in the cart, add it as a new product
        state.products.push(productToAdd);
      }
      // Use spread operator to create a new array and update localStorage
      localStorage.setItem("cartItems", JSON.stringify([...state.products]));
    },
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      state.products = state.products.filter((product) => product._id!== productIdToRemove);
      localStorage.setItem("cartItems", JSON.stringify([...state.products]));
    },
    deleteAll: (state) => {
      state.products = [];
      localStorage.removeItem("cartItems"); // Remove the entire cart from localStorage
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const productIndex = state.products.findIndex((product) => product._id=== id);
      if (productIndex !== -1) {
        state.products[productIndex].quantity = quantity;
      }
      localStorage.setItem("cartItems", JSON.stringify([...state.products]));
    },
  },
});

export const { addToCart, removeFromCart, deleteAll, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;