import axios from "axios";
import { useEffect, useState } from "react";
import { HeartOutlined } from "@ant-design/icons";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
      })
      .catch((error) => {
        console.error("API Error", error);
      });
  }, []);
  const discountedPrice = (initialPrice, discountPercentage) => {
    const discount = (initialPrice * discountPercentage) / 100;
    return initialPrice - discount;
  };
  
  return (
    <>
    <h1 className="text-center font-bold text-[2rem]">Products On Sale</h1>
    <div className="flex flex-wrap justify-center my-2 gap-4">
      {data.map((p, i) => {
        if (p.discountPercentage > '12') {
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
                    ${discountedPrice(p.price, p.discountPercentage).toFixed(2)}
                  </h2>
                </div>
                <div className="flex justify-evenly">
                  <button
                    className="bg-[#1877F2] py-3 px-6 w-[70%] my-2 text-[#FFF] rounded-[15px]"
                  >
                    Add to Cart
                  </button>
                  <HeartOutlined className="text-[1.5rem]" />
                </div>
              </div>
            </div>
          );
        }
        return null; 
      })}
    </div>
  </>
  );
}

