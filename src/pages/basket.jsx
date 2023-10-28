import { useContext } from "react";
import Navbar from "../components/navbar";
import { EcommerceContext } from "../context/ecommerceContext";

export default function Basket() {
  const { Products, total } = useContext(EcommerceContext);

  return (
    <>
      <div className="flex">
        <Navbar />
      </div>
      <div className=" flex flex-row justify-between text-center text-2xl font-semibold px-6 py-10 mt-6">
        <h3>Your basket</h3>
        <p>total : {total}</p>
      </div>
      {console.log(Products)}
    </>
  );
}

// i need to import the products stored here and then map it and update the cart is and i also need to understand what i have done here in this project and how does the reducer and context is being setuped 
// what is the variable or the things that contains the data of products i need to figure that out.