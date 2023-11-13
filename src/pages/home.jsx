// import MyMenu from "../components/item";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";


export default function Home() {
  return (
    <>
      <Navbar/>
    <div className="flex">
      {/* <MyMenu/> */}
      <Sidebar/>
    </div>
      <h1 className="text-center text-2xl font-semibold pt-3 my-2">Ecommerce with UseContext and useReducer</h1>
    </>
  )
}
