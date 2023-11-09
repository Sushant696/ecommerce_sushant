// /* eslint-disable react/prop-types */
// import { createContext, useReducer } from "react";
// import storeReducer, { initialState } from "./reducer";

// export const EcommerceContext = createContext();

// export const StoreProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(storeReducer, initialState);

//   //   for add to cart functionality
//   const addToBasket = (product) => {
//     const updatedBasket = [...state.products, product]; 
//     updatedPrice(updatedBasket);
  
//     dispatch({
//       type: "add",
//       payload: updatedBasket,
//     });
//   };
//   // for remove from cart functionality
//   const removeFromCart = (product) => {
//     const updatedBasket = state.products.filter(
//       (currProduct) => currProduct.name !== product.name
//     );

//     updatedPrice(updatedBasket);
//     dispatch({
//       type: "remove",
//       payload: updatedBasket,
//     });
//   };

//   const updatedPrice = (products) => {
//     let total = 0;
//     products.forEach((product) => {
//       total += product.price;
//     });
//     dispatch({
//         type: "update",
//         payload: total,
//       });      
//   };

//   const value = {
//     total: state.total,
//     products: state.products,
//     addToBasket,
//     removeFromCart,
//   };
//   return (
//     <EcommerceContext.Provider value={value}>
//       {children}
//     </EcommerceContext.Provider>
//   );
// };
