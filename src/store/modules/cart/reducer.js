import { CART_ADD, CART_REMOVE } from "./actionTypes";

// const initialCartState = localStorage.getItem("cart") || [];

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case CART_ADD:
      const { product } = action;

      return [...state, product];

    case CART_REMOVE:
      const { list } = action;

      return list;

    default:
      return state;
  }
};

export default cartReducer;
