// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isSeller: false,
// };

// export const sellerReducer = createReducer(initialState, {
//   LoadSellerRequest: (state) => {
//     state.isLoading = true;
//   },
//   LoadSellerSuccess: (state, action) => {
//     state.isSeller = true;
//     state.isLoading = false;
//     state.seller = action.payload;
//   },
//   LoadSellerFail: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//     state.isSeller = false;
//   },
//   clearErrors: (state) => {
//     state.error = null;
//   },
// });

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true, // Minimal state as provided
};

export const sellerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoadSellerRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("LoadSellerSuccess", (state, action) => {
      state.isSeller = true;
      state.isLoading = false;
      state.seller = action.payload;
    })
    .addCase("LoadSellerFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSeller = false;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
