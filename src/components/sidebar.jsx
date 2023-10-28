import { useState } from "react";
import {
  ContainerOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";
import { StyledButton } from "./styling";

// function getItem(label, key, icon, children, type) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// }
// const items = [
//   getItem("Option 1", "1", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("Option 3", "3", <DesktopOutlined />),
//   getItem("Option 4", "4", <ContainerOutlined />),
//   getItem("Option 5", "5", <ContainerOutlined />),
// ];
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="border flex flex-col">
      <StyledButton
        onClick={toggleCollapsed}
        size="large"
        className="text-[1.8rem] h-[4rem] p-3 text-left w-full"
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </StyledButton>

      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        // theme="dark"
        inlineCollapsed={collapsed}
        className="py-10"
        items={[
          {
            key: '1',
            className:'m-3',
            icon: <PieChartOutlined />,
            label: 'Smartphones',
          },
          {
            key: '2',
            className:'m-3',
            icon: <DesktopOutlined />,
            label: 'Laptops',
          },
          {
            key: '3',
            className:'',
            icon: <ContainerOutlined />,
            label: 'Groceries',  // groceries plus skincare
          },
          {
            key: '4',
            className:'',
            icon: <ContainerOutlined />,
            label: 'Home Decoration',
          },
          {
            key: '5',
            icon: <ContainerOutlined />,
            label: 'Fragrances',
          },
        ]}
      />
    </div>
  );
};
export default Sidebar;

// You can do it your way
