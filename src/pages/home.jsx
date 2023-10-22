import Navbar from "../components/navbar";
import Products from "../components/products";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <>
      <Navbar/>
    <div className="flex">
      <Sidebar/>
    <Products/>
    </div>
      <h1 className="text-center text-2xl font-semibold pt-3 my-2">Ecommerce with UseContext and useReducer</h1>
    </>
  )
}
