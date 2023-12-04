// storeReducer.js
export const initialState = {
  data: [],
  wishlist:[],
  cart: [],
  total: 0,
};

export const storeReducer = (state, action) => {

  switch (action.type) {
    // This case use do set my data to the state variable using reducer
    // how is setData being used here and where is it declared , what is it's initial state and changed one
    case "SET_DATA":
      return { ...state, data: action.payload };
      //  This case is use to add my items to cart

    case "ADD_TO_CART":
  return {
    ...state,
    cart: [...state.cart, action.payload],
    total: state.total + action.payload.price,
  };
  // add items to wishList
    case "ADD_TO_WISHLIST":
  return {
    ...state,
    wishlist:[...state.wishlist,action.payload]
    // maybe i should filter here instead of doing the if else in every file 
  
  };

    //    This case is use to remove my items from cart
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
      // update the total price when we add to remove the items from the basket
    case "UPDATE_TOTAL":{
      const newTotal = state.cart.reduce((acc, item) => acc + item.price, 0);
      return { ...state, total: newTotal };}
      // Default case
    default:
      return state;
  }
};
