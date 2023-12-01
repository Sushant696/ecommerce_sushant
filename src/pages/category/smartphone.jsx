import { useContext } from "react";
import StoreContext from "../../context/storeContext";
import { HeartOutlined, HeartFilled  } from "@ant-design/icons";
import { useState } from "react";

export default function Smartphone() {
  const { state, addToCart } = useContext(StoreContext);
  const [wishItem , setWishItem] = useState(false)


  const discountedPrice = (initialPrice, discountPercentage) => {
    const discount = (initialPrice * discountPercentage) / 100;
    return initialPrice - discount;
  };
  const toggleWishList = () =>{
    setWishItem(!wishItem)
  }
  return (
    <>
      <div className="flex flex-wrap justify-center my-2 gap-4">
        {state.data.map((p, i) => {
          if (p.category === "smartphones") {
            return (
              <div
                key={i}
                className="flex flex-col justify-between border border-[#555] border-[3px] rounded-[12px] w-[330px] m-4"
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

                <div className="h-1/3 p-2  m-1">
                  <div className="flex justify-evenly">
                    <button className="font-semibold text-[#fff] self-center p-1 rounded bg-[#900]">
                      Up to ${p.discountPercentage}% off
                    </button>
                    <h2 className="self-center font-medium text-[1.1rem] text-[#090] inline m-1">
                      $
                      {discountedPrice(p.price, p.discountPercentage).toFixed(
                        2
                      )}
                    </h2>
                  </div>
                  <div className="flex justify-evenly">
                    <button
                      className="bg-[#1877F2] py-3 px-6 w-[70%] my-2 text-[#FFF] rounded-[15px]"
                      onClick={() => {
                        console.log("Adding to cart:", p);
                        addToCart(p);
                      }}
                    >
                      Add to Cart
                    </button>
                    <button className="" onClick={toggleWishList}>{console.log('change the wish list')}
                    {wishItem ? <HeartFilled size={'2rem'} bgColor={'#900'} style={{bgColor:'#900'}} /> :<HeartOutlined className="text-[1.5rem]"/>}
                    </button>
                  </div>
                </div>
              </div>
            );
          }
          return null; // Skip rendering for items with a category other than "smartphones"
        })}
      </div>
    </>
  );
}

// fuck man the problem was not in context or anything but the way i provided data so what should i do is in the file where api call is made i will make different state to fetch the data and pass those state to the context global state
