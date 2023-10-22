import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { EcommerceContext } from "../context/ecommerceContext";
// import Smartphone from "../pages/category/smartphone";

export default function Products() {
  const [data, setData] = useState([]);
  const { addToBasket } = useContext(EcommerceContext); // importing addToBasket function from the ecommercecontext
  const handleAdd = () => {
    addToBasket(data);
  };

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
    <div className="flex flex-wrap justify-center  my-2 gap-4">
      {data.map((p, i) => (
        <div
          key={i}
          className="flex flex-col jusfity-between border border-black w-[300px] m-4"
        >
          <div className="">
            <img
              className="border border-[#900] p-1 w-[100%] h-[12rem]"
              src={`${p.thumbnail}`}
              alt=""
            />
            <h1 className="text-[1rem] font-semibold text-center capitalize">
              {p.title}
            </h1>
          </div>
          <div className="h-1/4 p-2 flex justify-between border border-[#009] m-1">
            <div>
              <strike className="font-semibold text-[#900] self-center">${p.price}</strike>
              <h4 className="self-center text-[.8rem] inline m-1">
                {p.discountPercentage}%
              </h4>
              <h2 className="text-[#090]"> ${discountedPrice(p.price, p.discountPercentage).toFixed(2)}</h2>
            </div>
            <div>
              <button
                className="bg-[#1877F2] p-3 m-2 rounded-[15px]"
                onClick={handleAdd}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /* Smart phones laptops components */
}
{
  /* <Smartphone key={i} data={data} />; */
}
