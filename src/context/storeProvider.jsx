/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";
import StoreContext from "./storeContext";
import axios from "axios";
import { initialState, storeReducer } from "./reducer";

const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        // the data is dispatched when set data case is selected
        dispatch({ type: "SET_DATA", payload: res.data.products });
      })
      .catch((error) => {
        console.error("API Error", error);
      });
  }, []);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    dispatch({ type: "UPDATE_TOTAL" });
  };

  const addToWishlist = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
    dispatch({ type: "UPDATE_TOTAL" });
  };
  // there function just get the data when user interact and then update the data accordingly , they mainly perform action as specified in the dispatch function
  const removeFromWishlist = (product) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
  };

  const value = {
    state,
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
export default StoreContextProvider;
