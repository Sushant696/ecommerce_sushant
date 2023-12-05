import { useContext } from "react";
import Navbar from "../components/navbar";
import StoreContext from "../context/storeContext";

export default function Basket() {
  const { state, removeFromCart } = useContext(StoreContext);
  

  return (
    <>
      <div className="flex">
        <Navbar />
      </div>
      <div>
        <div className="flex flex-row justify-around text-center text-2xl font-semibold px-6 py-10 mt-6">
          <h2>Your cart</h2>
          {/* Calculate and display the total price of all items in the cart */}
          <p>Total: ${state.total.toFixed(2)}</p>
        </div>
        <div className="">
          {/* Display each item separately */}
          {state.cart.map((item) => (
            <div className="flex justify-around m-4 text-center" key={item.id}>
              <div className="border-[#444] border-[3px] p-3 w-[14rem] text-center ">
                <img
                  className="h-[6rem] w-[12rem]"
                  src={`${item.thumbnail}`}
                  alt="my_thumbnail"
                />
                <h2 className="font-semibold text-[1.2rem]">{item.title}</h2>
              </div>
              <div>
                <h2 className="font-semibold text-[1rem]">${item.price}</h2>
                <button
                  className="font-semibold text-[#fff] self-center p-1 rounded bg-[#900]"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
