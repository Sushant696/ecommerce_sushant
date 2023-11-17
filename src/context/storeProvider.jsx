/* eslint-disable react/prop-types */
import { useState ,useEffect } from "react";
import StoreContext from "./storeContext";
import axios from "axios";

export default function StoreContextProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
        console.log('fetching data')
      })
      .catch((error) => {
        console.error("API Error", error);
      });
  }, []);
  return (
    <StoreContext.Provider value={{ data, setData }}>
      {children}
    </StoreContext.Provider>
  );
}

// call the api here and just pass the data variable to child components okay ?? 
