import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import StoreContext from "../context/storeContext";
import { HeartOutlined } from "@ant-design/icons";

const Navbar = () => {
  const { state } = useContext(StoreContext);

  return (
    <>
      <div className="w-full">
        <ul className="flex justify-between font-semibold p-5 bg-[#9BBDCF] bg-gradient-to-b from-blue-300 to-dark-blue-900">
          <Link className="text-[1.5rem]" to="/">
            <li>Sushant E-commerce</li>
          </Link>
          <div className="flex gap-4">
            <Link to="/basket" className="text-[1.5rem] flex">
              <div className="flex">
                <ShoppingCartOutlined />
                <span className="text-[14px] font-bold text-[#EE4B2B] p-1">
                  {state.cart.length}
                </span>
              </div>
            </Link>
            <Link to="/wishlist" className="text-[1.5rem] flex">
              <HeartOutlined />
            </Link>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
