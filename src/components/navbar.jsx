import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-around font-semibold p-4 bg-[#8282]">
        <Link to='/'><li>Home</li></Link>
        <Link to='/basket'><li>Basket</li></Link>
        {/* <Link><li></li></Link> */}
      </ul>
    </div>
  );
};

export default Navbar;
