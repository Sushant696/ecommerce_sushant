import { HeartOutlined } from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState } from "react";
// import Smartphone from "../pages/category/smartphone";

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

  return (
    <div className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-3 px-4 ">
      {data.map((p, i) => (
        <div key={i} className="border border-black w-[15rem] p-2">
          <div>
            <img
              className="w-[13rem] h-[13rem]"
              src={`${p.thumbnail}`}
              alt=""
            />
            <h1 className="text-[1rem] font-semibold text-center capitalize">{p.title}</h1>
          </div>
          <div className="flex flex-row justify-between border">
          <h2 className="font-semibold border ">${p.price}</h2>
          <div>
          <button className="bg-[#1877F2] p-3 m-2 rounded-[15px]">Add to Cart</button>
          <HeartOutlined />
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
{/* <Smartphone key={i} data={data} />; */}
