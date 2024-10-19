//this is the App.tsx when using router

import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { Box, Show, VStack } from "@chakra-ui/react";
import { AuroraBackground } from "./aceternityUI/AuroraBackgoround/AuroraBackground";

const Layout = () => {
  const location = useLocation();
  const isWorksPage = location.pathname === "/worksPage";
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (isWorksPage) {
      return (
        <AuroraBackground className="h-full min-w-[99.3vw] ">
          {children}
        </AuroraBackground>
      );
    }
    return <>{children}</>;
  };
  return (
    <VStack bg={location.pathname === "/worksPage" ? "#2c5282" : ""} gap="0">
      <Wrapper>
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
      </Wrapper>

      <div className="main">
        <Outlet />
      </div>
    </VStack>
  );
};

export default Layout;
