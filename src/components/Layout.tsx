//this is the App.tsx when using router

import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { Box, Show, VStack } from "@chakra-ui/react";
const Layout = () => {
  const location = useLocation();
  // const isWorksPage = location.pathname === "/worksPage";
  // const Wrapper = ({ children }: { children: React.ReactNode }) => {
  //   if (isWorksPage) {
  //     return (
  //       <AuroraBackground className="h-full min-w-[99.3vw] ">
  //         {children}
  //       </AuroraBackground>
  //     );
  //   }
  //   return <>{children}</>;
  // };
  return (
    <VStack
      // bg={location.pathname === "/worksPage" ? "black" : ""}
      gap="0"
      // color={location.pathname === "/worksPage" ? "white" : ""}
    >
      {/* <Wrapper> */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt="2vh"
        // bg={location.pathname === "/worksPage" ? "black" : ""}
        width="100%"
      >
        <Show above="sm">
          <NavBar />
        </Show>
      </Box>
      {/* </Wrapper> */}

      <Box className="main">
        <Outlet />
      </Box>
    </VStack>
  );
};

export default Layout;
