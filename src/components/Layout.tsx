//this is the App.tsx when using router

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Box, Show, VStack } from "@chakra-ui/react";

const Layout = () => {
  return (
    <VStack>
      <Box mt="2vh">
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
