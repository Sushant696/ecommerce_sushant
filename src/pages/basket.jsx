import { useContext } from "react";
import Navbar from "../components/navbar";
import { EcommerceContext } from "../context/ecommerceContext";

export default function Basket() {
  const { total } = useContext(EcommerceContext);

  return (
    <>
      <div className="flex">
        <Navbar />
      </div>
      <div className="text-center text-2xl font-semibold pt-3 my-2">
        <h3>Your basket</h3>
        <p>total : {total}</p>

      </div>
    </>
  );
}
