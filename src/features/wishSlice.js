// import { createSlice } from "@reduxjs/toolkit";
// import { getCookie, setCookie } from "../utils/cookie";

// // const initialWishItems = JSON.parse(localStorage.getItem("wishItems")) || [];

// const checkCookies = () => {
//   const wishItems = getCookie('wishItems');
//   return wishItems ? JSON.parse(wishItems) : [];
// }
// const initialState = {
//     wishlistsItems: checkCookies(),
// };

// const wishSlice = createSlice({
//   name: "wish",
//   initialState,
//   reducers: {
//     addToWish: (state, action) => {
//         const productToAdd = action.payload;
//         const existingProduct = state.wishlistsItems.find((product) => product._id === productToAdd._id);
  
//         if (existingProduct) {
//             alert('You cannot add this to wishlists, it has already been added!');
//         } else {
//           state.wishlistsItems.push(productToAdd);
//         }
//         // localStorage.setItem("wishItems", JSON.stringify(state.wishlistsItems));
//       setCookie("wishItems", JSON.stringify([...state.wishlistsItems]),30)

//     },
//     removeFromWish: (state, action) => {
//       state.wishlistsItems = state.wishlistsItems.filter(
//         (item) => item._id !== action.payload
//       );
//       // localStorage.setItem("wishItems", JSON.stringify(state.wishlistsItems));
//       setCookie("wishItems", JSON.stringify([...state.wishlistsItems]),30)
//     },
   
//   },
// });

// export const { addToWish, removeFromWish } =
//   wishSlice.actions;

// export default wishSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../utils/cookie";

// Function to check cookies for wishlist items
const checkCookies = () => {
  const wishItems = getCookie('wishItems');
  return wishItems ? JSON.parse(wishItems) : [];
};

const initialState = {
  wishlistsItems: checkCookies(),
};

// Function to show a modal
function showModal(title, message) {
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal fade show';
    modalContainer.style.display = 'block';
    modalContainer.tabIndex = -1;
    modalContainer.role = 'dialog';

    modalContainer.innerHTML = `
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>${message}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modalContainer);

    modalContainer.querySelector('.btn-close').onclick = function() {
        document.body.removeChild(modalContainer);
    };
    modalContainer.querySelector('.btn-primary').onclick = function() {
        document.body.removeChild(modalContainer);
    };
}

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWish: (state, action) => {
        const productToAdd = action.payload;
        const existingProduct = state.wishlistsItems.find((product) => product._id === productToAdd._id);
  
        if (existingProduct) {
            showModal('Wishlist Error', 'You cannot add this to wishlists, it has already been added!');
        } else {
            state.wishlistsItems.push(productToAdd);
            showModal('Success', 'Item added to wishlist successfully!');
        }

        setCookie("wishItems", JSON.stringify([...state.wishlistsItems]), 30);
    },
    removeFromWish: (state, action) => {
      state.wishlistsItems = state.wishlistsItems.filter(
        (item) => item._id !== action.payload
      );
      setCookie("wishItems", JSON.stringify([...state.wishlistsItems]), 30);
      showModal('Success', 'Item removed from wishlist successfully!');
    },
  },
});

export const { addToWish, removeFromWish } = wishSlice.actions;

export default wishSlice.reducer;
