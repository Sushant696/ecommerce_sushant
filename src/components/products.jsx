import StoreContext from "../context/storeContext";
import { useContext, useState } from "react";
import {
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";

export default function Products() {
  const { state, addToCart, addToWishList } = useContext(StoreContext);
  const [wishItem, setWishItems] = useState([]);

  const discountedPrice = (initialPrice, discountPercentage) => {
    const discount = (initialPrice * discountPercentage) / 100;
    return initialPrice - discount;
  };
  function toggleWishList(product) {
    if (wishItem.includes(product.id)) {
      setWishItems((prevItems) =>
        prevItems.filter((item) => item !== product.id)
      );
    } else {
      addToWishList(product);
      setWishItems((prevItems) => [...prevItems, product.id]);
    }
  }

  return (
    <div>
      <h1 className="font-bold text-[2.5rem] px-8 mt-4">
        Heavily Discounted Products
      </h1>
      <div className="flex flex-wrap justify-center mt-2  gap-4">
        {state.data.map((p, i) => {
          if (p.discountPercentage > "12") {
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
                    <button className="font-semibold text-[#111] self-center p-1 rounded">
                      Up to ${p.discountPercentage}% off
                    </button>
                    <h2 className="self-center font-medium text-[1.1rem] text-[#090] inline m-1">
                      $
                      {discountedPrice(p.price, p.discountPercentage).toFixed(
                        2
                      )}
                    </h2>
                  </div>
                  <div className="flex justify-between px-2 py-4 border">
                    <ShoppingCartOutlined
                      onClick={() => {
                        addToCart(p);
                      }}
                      className="text-[#111] text-[2rem] text-[#111] rounded-[15px] transition-transform transform active:scale-90"
                    />
                    <button
                      className=""
                      onClick={() => {
                        toggleWishList(p);
                      }}
                    >
                      {wishItem.includes(p.id) ? (
                        <HeartFilled
                          size={"2rem"}
                          style={{ bgColor: "#900" }}
                        />
                      ) : (
                        <HeartOutlined className="text-[1.8rem]" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
