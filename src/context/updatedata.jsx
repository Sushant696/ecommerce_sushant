// import axios from "axios";
// import { useContext } from "react";
// import { useEffect, useState } from "react";
// import StoreContext from "./storeContext";

// export default function Products() {
//   const [apiData, setapiData] = useState([]);
//   const {setData} = useContext(StoreContext)

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((res) => {
//         setapiData(res.apiData.products);
//       })
//       .catch((error) => {
//         console.error("API Error", error);
//       });
//   }, []);

//   // setData({apiData,setapiData})
  
//   return (
//     <> 
//     <h2 className="text-center text-[2rem]">Hassle Free shoping on sushant Ecommerce</h2>
//     <div className="flex flex-wrap justify-center  my-2 gap-4">
//       {apiData.map((p, i) => (
//         <div
//           key={i}
//           className="flex flex-col jusfity-between border border-[#555] border-[3px] rounded-[12px] w-[330px] m-4"
//         >
//           <div className="">
//             <img
//               className="rounded-[12px] p-2 w-[100%] h-[12rem]"
//               src={`${p.thumbnail}`}
//               alt=""
//             />
//             <h1 className="text-[1rem] mb-1 font-semibold text-center capitalize">
//               {p.title}
//             </h1>
//           </div>
//           <hr />
//         </div>
//       ))}
//     </div>
// </>
//   );
// }

