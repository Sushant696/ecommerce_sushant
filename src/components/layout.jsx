import Navbar from "./navbar";
import Sidebar from "./sidebar";
export default function Pages() {
  return (
    <div className="flex">
      <Sidebar/>
      <Navbar/>
      {/* <h1 className=" text-center  pt-3 my-2 ">Ecommerce with UseContext and useReducer</h1> */}
    </div>
  )
}
