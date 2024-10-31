import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { Box } from "@mui/material";
import {
  financeIcon,
  homeSVG,
  mealIcon,
  messageIcon,
  studentSVG,
  teacherIcon,
  userIcon,
} from "../assets/iconSVG";

const TopLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string>(location.pathname);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const handleMenuItemClick = (item: string) => {
    setActiveItem(item);
  };

  const getIconColor = (item: string) =>
    activeItem === item ? "#1568B1" : "white";

  const getTextStyle = (item: string) => ({
    color: getIconColor(item),
    fontSize: "18px",
    fontWeight: activeItem === item ? 700 : 400,
  });

  const getMenuItemStyle = (item: string) => ({
    ...getTextStyle(item),
    backgroundColor: activeItem === item ? "#E7F5FF" : "transparent",
    borderTopLeftRadius: activeItem === item ? "40px" : "0",
    borderBottomLeftRadius: activeItem === item ? "40px" : "0",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMinimized(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set the state based on the initial window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        collapsed={isMinimized}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#1568B1",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
            width: isMinimized ? "80px" : "250px", // Adjust width based on isMinimized state
            transition: "width 0.3s", // Smooth transition for width change
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            width: "100%",
          }}
        >
          <img
            style={{ width: isMinimized ? "50%" : "70%" }}
            alt="logo"
            src={logo}
          />
        </Box>
        <Menu>
          <MenuItem
            component={<Link to="/" />}
            icon={homeSVG({ color: getIconColor("/") })}
            onClick={() => handleMenuItemClick("/")}
            style={getMenuItemStyle("/")}
          >
            {!isMinimized && "Tổng quan"}
          </MenuItem>
          <MenuItem
            component={<Link to="/students" />}
            icon={studentSVG({ color: getIconColor("/students") })}
            onClick={() => handleMenuItemClick("/students")}
            style={getMenuItemStyle("/students")}
          >
            {!isMinimized && "Học sinh"}
          </MenuItem>
          <MenuItem
            component={<Link to="/teachers" />}
            icon={teacherIcon({ color: getIconColor("/teachers") })}
            onClick={() => handleMenuItemClick("/teachers")}
            style={getMenuItemStyle("/teachers")}
          >
            {!isMinimized && "Giáo viên"}
          </MenuItem>
          <MenuItem
            component={<Link to="/finance" />}
            icon={financeIcon({ color: getIconColor("/finance") })}
            onClick={() => handleMenuItemClick("/finance")}
            style={getMenuItemStyle("/finance")}
          >
            {!isMinimized && "Tài chính"}
          </MenuItem>
          <MenuItem
            component={<Link to="/meals" />}
            icon={mealIcon({ color: getIconColor("/meals") })}
            onClick={() => handleMenuItemClick("/meals")}
            style={getMenuItemStyle("/meals")}
          >
            {!isMinimized && "Bữa ăn"}
          </MenuItem>
          <MenuItem
            component={<Link to="/users" />}
            icon={userIcon({ color: getIconColor("/users") })}
            onClick={() => handleMenuItemClick("/users")}
            style={getMenuItemStyle("/users")}
          >
            {!isMinimized && "Người dùng"}
          </MenuItem>
          <MenuItem
            disabled
            component={<Link to="/messages" />}
            icon={messageIcon({ color: getIconColor("/messages") })}
            onClick={() => {}}
            style={getMenuItemStyle("/messages")}
          >
            {!isMinimized && "Tin nhắn"}
          </MenuItem>
        </Menu>
      </Sidebar>
      <div
        style={{
          flex: 1,
          overflow: "auto",
          backgroundColor: "#E7F5FF",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TopLayout;
