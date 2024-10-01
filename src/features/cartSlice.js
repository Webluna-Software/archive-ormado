import { createSlice } from "@reduxjs/toolkit";
import { deleteCookie, getCookie, setCookie } from "../utils/cookie";

// const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
// const initialCartItems = JSON.parse(getCookie('cartItems')) || [];

const checkCookies = () => {
  const cartItems = getCookie('cartItems');
  return cartItems ? JSON.parse(cartItems) : [];
}
 
const initialState = {
  products: checkCookies(),
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
      // localStorage.setItem("cartItems", JSON.stringify([...state.products]));
      setCookie("cartItems", JSON.stringify([...state.products]),30)
    },
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      state.products = state.products.filter((product) => product._id!== productIdToRemove);
      // localStorage.setItem("cartItems", JSON.stringify([...state.products]));
      setCookie("cartItems", JSON.stringify([...state.products]),30)
    },
    deleteAll: (state) => {
      state.products = [];
      // localStorage.removeItem("cartItems"); // Remove the entire cart from localStorage
      deleteCookie("cartItems")
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const productIndex = state.products.findIndex((product) => product._id=== id);
      if (productIndex !== -1) {
        state.products[productIndex].quantity = quantity;
      }
      // localStorage.setItem("cartItems", JSON.stringify([...state.products]));
      setCookie("cartItems", JSON.stringify([...state.products]),30)
    },
  },
});

export const { addToCart, removeFromCart, deleteAll, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;