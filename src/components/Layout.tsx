//this is the App.tsx when using router

import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { Box, Show, VStack } from "@chakra-ui/react";

const Layout = () => {
  const location = useLocation();
  return (
    <VStack bg={location.pathname === "/worksPage" ? "black" : ""}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt="2vh"
        bg={location.pathname === "/worksPage" ? "black" : ""}
        width="100%"
      >
        <Show above="sm">
          <NavBar />
        </Show>
      </Box>
      <div className="main">
        <Outlet />
      </div>
    </VStack>
  );
};

export default Layout;
