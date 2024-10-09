// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isLoading: true,
// };

// export const productReducer = createReducer(initialState, {
//   productCreateRequest: (state) => {
//     state.isLoading = true;
//   },
//   productCreateSuccess: (state, action) => {
//     state.isLoading = false;
//     state.product = action.payload;
//     state.success = true;
//   },
//   productCreateFail: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//     state.success = false;
//   },
//   clearErrors: (state) => {
//     state.error = null;
//   },
// });

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const productReducer = createReducer(initialState, (builder) => {
  builder
  .addCase("productCreateRequest", (state) => {
    state.isLoading = true;
  })
  .addCase("productCreateSuccess", (state, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  })
  .addCase("productCreateFail", (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  })
  .addCase("clearErrors", (state) => {
    state.error = null;
  })

  // get all products of shop
  .addCase("getAllProductsShopRequest", (state) => {
    state.isLoading = true;
  })
  .addCase("getAllProductsShopSuccess", (state, action) => {
    state.isLoading = false;
    state.products = action.payload;
  })
  .addCase("getAllProductsShopFailed", (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })

  // delete product of a shop
  .addCase("deleteProductRequest", (state) => {
    state.isLoading = true;
  })
  .addCase("deleteProductSuccess", (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  })
  .addCase("deleteProductFailed", (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  });

});