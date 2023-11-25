// storeReducer.js
export const initialState = {
  data: [],
  cart: [],
  total: 0,
};

export const storeReducer = (state, action) => {

  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
      
    case "UPDATE_TOTAL":{
      const newTotal = state.cart.reduce((acc, item) => acc + item.price, 0);
      return { ...state, total: newTotal };}
    default:
      return state;
  }
};
