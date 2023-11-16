/* eslint-disable react/prop-types */
import { useState } from "react";
import StoreContext from "./storeContext";

export default function StoreContextProvider({ children }) {
  const [data, setData] = useState("initial");
  console.log("data state", data);
  return (
    <StoreContext.Provider value={{ data, setData }}>
      {children}
    </StoreContext.Provider>
  );
}

// call the api here and just pass the data variable to child components okay ?? 
