import { Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useGetUserQuery } from "../ReactRedux/api";
import { useSelector } from "react-redux";

export default function Layout () {
  const isNotMobile = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <Box width="100%" height="100%"display={isNotMobile?"flex":"block"}>
      <Sidebar
        user={data||{}}
        isNotMobile={isNotMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}  user={data||{}}/>
        <Outlet />
      </Box>
    </Box>
  );
}
