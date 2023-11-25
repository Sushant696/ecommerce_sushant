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
        dispatch({ type: "SET_DATA", payload: res.data.products });
        console.log('fetching data')
      })
      .catch((error) => {
        console.error("API Error", error);
      });
  }, []);

  const addToCart = (product) => {
    console.log('add to cart',product)
    dispatch({ type: "ADD_TO_CART", payload: product });
    dispatch({ type: "UPDATE_TOTAL" });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
    dispatch({ type: "UPDATE_TOTAL" });
  };

  const value = {
    state,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider