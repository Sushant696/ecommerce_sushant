import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext } from "react";

import { Link } from "react-router-dom";
import StoreContext from "../context/storeContext";

const Navbar = () => {
  const { state } = useContext(StoreContext);

  return (
    <>
      <div className="w-full">
        <ul className="flex justify-around font-semibold p-5 bg-[#acc8d7]">
          <Link className="text-[1.5rem]" to="/">
            <li>Home</li>
          </Link>
          <Link to="/basket" className="text-[1.5rem] flex">
            <li>Basket</li>
            <div className="flex">
              <ShoppingCartOutlined />
              <span className="text-[14px] font-bold text-[#EE4B2B] p-1">
                {state.cart.length}
              </span>
            </div>
          </Link>
          <Link to="/wishlist" className="text-[1.5rem] flex">
            <li>WishList</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
