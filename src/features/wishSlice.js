import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../utils/cookie";

// const initialWishItems = JSON.parse(localStorage.getItem("wishItems")) || [];

const checkCookies = () => {
  const wishItems = getCookie('wishItems');
  return wishItems ? JSON.parse(wishItems) : [];
}
const initialState = {
    wishlistsItems: checkCookies(),
};

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWish: (state, action) => {
        const productToAdd = action.payload;
        const existingProduct = state.wishlistsItems.find((product) => product._id === productToAdd._id);
  
        if (existingProduct) {
            alert('You cannot add this to wishlists, it has already been added!');
        } else {
          state.wishlistsItems.push(productToAdd);
        }
        // localStorage.setItem("wishItems", JSON.stringify(state.wishlistsItems));
      setCookie("wishItems", JSON.stringify([...state.wishlistsItems]),30)

    },
    removeFromWish: (state, action) => {
      state.wishlistsItems = state.wishlistsItems.filter(
        (item) => item._id !== action.payload
      );
      // localStorage.setItem("wishItems", JSON.stringify(state.wishlistsItems));
      setCookie("wishItems", JSON.stringify([...state.wishlistsItems]),30)
    },
   
  },
});

export const { addToWish, removeFromWish } =
  wishSlice.actions;

export default wishSlice.reducer;