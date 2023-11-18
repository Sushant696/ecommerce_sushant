import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full">
        <ul className="flex justify-around font-semibold p-5 bg-[#8282]">
          <Link className="text-[1.5rem]" to="/">
            <li>Home</li>
          </Link>
          <Link to="/basket" className="text-[1.5rem] flex">
            <li>
              Basket
            </li>
            <div className="">
              <ShoppingCartOutlined />
            <span className="text-[14px] text-[#FFF] font-bold bg-[#EE4B2B] p-1 rounded-[50%]">
              0
            </span>
            </div>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
