import { useContext } from "react";
import Navbar from "../components/navbar";
import StoreContext from "../context/storeContext";

function WishList() {
  const { state, removeFromWishlist } = useContext(StoreContext);
  return (
    <div className="text-[2rem] text-center">
      <Navbar />
      {state.wishlist.map((item) => (
        <div className="flex justify-around m-4 text-center" key={item.id}>
          <div className="border-[#444] border-[3px] p-3 w-[14rem] text-center ">
            <img
              className="h-[6rem] w-[12rem]"
              src={`${item.thumbnail}`}
              alt="my_thumbnail"
            />
            <h2 className="font-semibold text-[1.2rem]">{item.title}</h2>
            <button className="" onClick={() => removeFromWishlist(item)}>
              Remove From Wishlist{" "}
            </button>
          </div>
        </div>
      ))}{" "}
    </div>
  );
}
export default WishList;

// every items are being deleted when i removed one item that means i have to make each items unique just like in remove from cart study the remove from cart