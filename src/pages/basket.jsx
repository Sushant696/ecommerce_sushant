import { useContext } from "react";
import Navbar from "../components/navbar";
import StoreContext from "../context/storeContext";


export default function Basket() {
  const { data } = useContext(StoreContext); // data received here

  return (
    <>
      <div className="flex">
        <Navbar />
      </div>
      <div className=" flex flex-row justify-between text-center text-2xl font-semibold px-6 py-10 mt-6">
        <h3>Your basket</h3>
        <p>total :</p>
      </div>
    </>
  );
}
