import { useContext, useState } from "react";
import StoreContext from "../../context/storeContext";
import {
  ShoppingCartOutlined,
} from "@ant-design/icons";

export default function Grocery() {
  const { state, addToCart, addToWishList } = useContext(StoreContext);
  const [wishItem, setWishItems] = useState([]);

  const discountedPrice = (initialPrice, discountPercentage) => {
    const discount = (initialPrice * discountPercentage) / 100;
    return initialPrice - discount;
  };
  const toggleWishList = (product) => {
    if (wishItem.includes(product.id)) {
      //If already in wishlist, remove it
      setWishItems((prevItems) =>
        prevItems.filter((item) => item !== product.id)
      );
    } else {
      // If not in wishlist add it , we are making copy of previtems
      setWishItems((prevItems) => [...prevItems, product.id]);
      addToWishList(product);
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center my-2 gap-4">
        {state.data.map((p, i) => {
          if (p.category === "groceries") {
            return (
              <div
                key={i}
                className="flex flex-col justify-between shadow-[0px_5px_15px_rgba(0,0,0,0.35)] p-4 w-[330px] m-4"
              >
                <div className="">
                  <img
                    className="rounded-[12px] p-2 w-[100%] h-[12rem]"
                    src={`${p.thumbnail}`}
                    alt=""
                  />
                  <h1 className="text-[1rem] mb-1 font-semibold text-center capitalize">
                    {p.title}
                  </h1>
                </div>
                <hr />

                <div className="h-1/3">
                  <div className="flex justify-between">
                    <button className="font-semibold text-[#555] self-center p-1 rounded">
                      Up to ${p.discountPercentage}% off
                    </button>
                    <h2 className="self-center font-medium text-[1.1rem] text-[#090] inline m-1">
                      $
                      {discountedPrice(p.price, p.discountPercentage).toFixed(
                        2
                      )}
                    </h2>
                  </div>
                  <div className="flex justify-between px-2 py-4">
                    <button
                      className=""
                      onClick={() => {
                        toggleWishList(p);
                      }}
                    >
                      {wishItem.includes(p.id) ? (
                        <span className="bg-[#900] rounded text-[#fff] px-1 p-2">
                        Remove From wishlist
                      </span>
                    ) : (
                      <span className="bg-[#090] rounded text-[#fff] px-1 p-2">
                        Add to wishlist
                      </span>
                      )}
                    </button>
                      <ShoppingCartOutlined
                        onClick={() => {
                          addToCart(p);
                        }}
                        className="text-[#111] text-[2rem] text-[#111] rounded-[15px] transition-transform transform active:scale-90"
                      />
                  </div>
                </div>
              </div>
            );
          }
          return null; // Skip rendering for items with a category other than "laptops"
        })}
      </div>
    </>
  );
}

// fuck man the problem was not in context or anything but the way i provided data so what should i do is in the file where api call is made i will make different state to fetch the data and pass those state to the context global state
