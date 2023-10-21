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
        <div key={i} className="border border-black w-[15rem] m-4 p-2">
          <div>
            <img
              className="w-[15rem] h-[15rem]"
              src={`${p.thumbnail}`}
              alt=""
            />
            <h1 className="text-[1rem] font-semibold capitalize">{p.title}</h1>
          </div>
          <h2>${p.price}</h2>
          <button>Add to Cart</button>
          <HeartOutlined />
        </div>
      ))}
    </div>
  );
}

{
  /* Smart phones laptops components */
}
{/* <Smartphone key={i} data={data} />; */}
