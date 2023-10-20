import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
export default function Basket() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Navbar />
      </div>
      <div className="text-center text-2xl font-semibold pt-3 my-2">
        <h1>Welcome to basket component</h1>
      </div>
    </>
  );
}
