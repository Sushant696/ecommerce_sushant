import Navbar from "./navbar";
import Sidebar from "./sidebar";
export default function Home() {
  return (
    <div>
      <Sidebar/>
      <Navbar/>
      <h1 className=" text-center text-2xl font-semibold pt-3 my-2 ">Ecommerce with UseContext and useReducer</h1>
    </div>
  )
}
