import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="w-full">
      <ul className="flex justify-around font-semibold p-5 bg-[#8282]">
        <Link to='/'><li>Home</li></Link>
        <Link to='/basket'><li>Basket <ShoppingCartOutlined/></li></Link> 
      </ul>
    </div>
    </>
  );
};

export default Navbar;
