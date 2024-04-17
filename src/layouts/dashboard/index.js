
import { Stack } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";



const DashboardLayout = () => {
  return (
    <Stack direction={"row"}>
      <SideBar/>
      <Outlet/>
    </Stack>
  );
};

export default DashboardLayout;
