import * as React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./components/footer";
import Topbar from "./components/topbar";
import Banner from "./components/banner";

const Layout = () => {
  return (
    <>
      <Banner />
      <Box sx={{ overflowY: "auto" }}>
        <Topbar />
        <Box>
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
