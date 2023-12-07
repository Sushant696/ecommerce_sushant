import {
  ContainerOutlined,
  DesktopOutlined,
  MobileOutlined,
  ShopOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";
import { useNavigate, Routes, Route } from "react-router-dom";
import Products from "./products";
import Smartphone from "../pages/category/smartphone";
import Laptops from "../pages/category/laptops";
import Grocery from "../pages/category/grocery";
import HomeDecoration from "../pages/category/homedecor";
import Fragrances from "../pages/category/fragnances";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="">
        <Menu
          onClick={({ key }) => {
            if (key === "signout") {
              //do nothing
            } else {
              navigate(key);
            }
          }}
          mode="horizontal"
          theme=""
          className="flex justify-center gap-8"
          items={[
            {
              label: "Smartphones",
              key: "/home/smartphones",
              className: "p-2 m-2 text-[1.2rem] font-semibold",
              icon: <MobileOutlined style={{ fontSize: "1.1rem" }} />,
            },
            {
              label: "Laptops",
              key: "/home/laptops",
              className: "p-2 m-2 font-semibold text-[1.2rem]",
              icon: <DesktopOutlined style={{ fontSize: "1.1rem" }}  />,
            },
            {
              key: "/home/groceries",
              className: "p-2 m-2 text-[1.2rem] font-semibold ",
              icon: <ShoppingOutlined style={{ fontSize: "1.1rem" }}  />,
              label: "Groceries",
            },
            {
              label: "Home Decoration",
              key: "/home/decor",
              className: "p-2 m-2 font-semibold text-[1.2rem]",
              icon: <ShopOutlined style={{ fontSize: "1.1rem" }}  />,
            },
            {
              label: "Fragrances",
              className: "p-2 m-2 font-semibold text-[1.2rem]",
              key: "/home/fragrances",
              icon: <ContainerOutlined style={{ fontSize: "1.1rem" }} />,
            },
          ]}
        />
      </div>
      <SidebarPath />
    </div>
  );
};

function SidebarPath() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/home/smartphones" element={<Smartphone />} />
        <Route path="/home/laptops" element={<Laptops />} />
        <Route path="/home/groceries" element={<Grocery />} />
        <Route path="/home/decor" element={<HomeDecoration />} />
        <Route path="/home/fragrances" element={<Fragrances />} />
      </Routes>
    </div>
  );
}

export default Sidebar;

// if you want to integrate that toggle then import the navbar here in this component and then pass the data, the state and the setstate variables and then make your custom button and use it inside of the navbar .. better looks and nice design
