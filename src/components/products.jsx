import axios from "axios";
import { useEffect, useState } from "react";

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
    <div>
      {data.map((p, index) => ( 
        <div key={index}>
          <h2 className="text-[#111]">{p.title}</h2>
          <h2>{p.description}</h2>
        </div>
      ))}
    </div>
  );
}
