import {
  HomeOutlined,
  LaptopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Products from "./products";

export default function MyMenu() {
  const [collapse, setCollapsed] = useState(false);
  const Navigate = useNavigate();
  function handleCollapse() {
    setCollapsed(!collapse);
  }

  return (
    <>
      <div className="">
        <Button onClick={handleCollapse}>
          {collapse ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        </Button>
        <Menu
          onClick={({ key }) => {
            if (key === "/signout") {
              // Do nothing
            } else {
              Navigate(key);
            }
          }}
          //   mode="inline"
          inlineCollapsed={collapse}
          items={[
            { label: "Home", icon: <HomeOutlined />, key: "/" },
            {
              label: "Smartphone",
              icon: <MobileOutlined />,
              key: "/smartphones",
            },
            { label: "Laptops", icon: <LaptopOutlined />, key: "/laptops" },
            { label: "Groceries", key: "/groceries" },
            { label: "Fragnances", key: "/fragnances" },
          ]}
        ></Menu>
        <Content />
      </div>
    </>
  );
}

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/smartphones" element={<h1>Smartphone</h1>} />
        <Route path="/laptops" element={<h1>Laptops</h1>} />
        <Route path="/Groceries" element={<h1>Groceries</h1>} />
      </Routes>
    </div>
  );
}
