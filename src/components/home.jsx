import Navbar from "./navbar";
import Sidebar from "./sidebar";
export default function Home() {
  return (
    <>
    <div className="flex">
      <Sidebar/>
      <Navbar/>
    </div>
      <h1 className=" text-center  pt-3 my-2 ">Ecommerce with UseContext and useReducer</h1>
    </>
  )
}
