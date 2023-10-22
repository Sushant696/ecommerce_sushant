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

  return (
    <div className="flex flex-wrap justify-center  my-2 gap-4  ">
      {data.map((p, i) => (
        <div
          key={i}
          className="flex flex-col jusfity-between border border-black w-[15rem] m-4"
        >
          <div>
            <img
              className="w-[13rem] h-[13rem]"
              src={`${p.thumbnail}`}
              alt=""
            />
            <h1 className="text-[1rem] font-semibold text-center capitalize">
              {p.title}
            </h1>
          </div>
          <div className="h-[4rem] flex flex-row justify-between border  ">
            <h2 className="font-semibold border ">${p.price}</h2>
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
