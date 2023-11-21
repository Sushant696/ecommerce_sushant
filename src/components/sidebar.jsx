import {
  ContainerOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MobileOutlined,
  ShopOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

import { useState } from "react";
import { Menu, Button } from "antd";
import { useNavigate, Routes, Route } from "react-router-dom";
import Products from "./products";
import Smartphone from "../pages/category/smartphone";
import Laptops from "../pages/category/laptops";
import Grocery from "../pages/category/grocery";
import HomeDecoration from "../pages/category/homedecor";
import Fragrances from "../pages/category/fragnances";


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };


  return (
    <div className="flex">
      <div className=" flex flex-col ">
        <Button
          onClick={toggleCollapsed}
          className="text-[2rem] h-[2.5rem] mx-3 my-6 flex justify-center bg-[#1877F2] hover:bg-[#1877F2] hover:text-[#111] active:bg-[#1877F2]-700 focus:outline-none focus:ring focus:ring-gray-300 "
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          onClick={({ key }) => {
            if (key === "signout") {
              //do nothing
            } else {
              navigate(key);
            }
          }}
          mode="inline"
          // theme="dark"
          inlineCollapsed={collapsed}
          className=""
          items={[
            {
              label: "Smartphones",
              key: "/smartphones",
              className: "",
              icon: <MobileOutlined />,
            },
            {
              label: "Laptops",
              key: "/laptops",
              className: "m-3",
              icon: <DesktopOutlined />,
            },
            {
              key: "groceries",
              className: "",
              icon: <ShoppingOutlined />,
              label: "Groceries", 
            },
            {
              label: "Home Decoration",
              key: "/decor",
              className: "",
              icon: <ShopOutlined  />,
            },
            {
              label: "Fragrances",
              key: "/fragrances",
              icon: <ContainerOutlined />,
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
        <Route path="/smartphones" element={<Smartphone/>} />
        <Route path="/laptops" element={<Laptops/>} />
        <Route path="/groceries" element={<Grocery/>} />
        <Route path="/decor" element={<HomeDecoration/>} />
        <Route path="/fragrances" element={<Fragrances/>} />
      </Routes>
    </div>
  );
}

export default Sidebar;

// if you want to integrate that toggle then import the navbar here in this component and then pass the data, the state and the setstate variables and then make your custom button and use it inside of the navbar .. better looks and nice design