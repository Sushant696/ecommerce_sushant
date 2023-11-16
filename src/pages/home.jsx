// import MyMenu from "../components/item";
// import { useContext } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
// import StoreContext from "../context/storeContext";


export default function Home() {
  return (
    <>
      <Navbar/>
    <div className="flex">
      <Sidebar/>
    </div>
      <h1 className="text-center text-2xl font-semibold pt-3 my-2"></h1>
    </>
  )
}
