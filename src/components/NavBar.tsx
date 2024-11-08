import {
  HStack,
  Text,
  Tabs,
  TabList,
  Tab,
  Box,
  Show,
  Hide,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import PhoneNavbar from "./PhoneNavbar";
import GitHubme from "./GitHubme";

export const navItems = [
  { displayName: "Home", pageLink: "/", id: 1 },
  { displayName: "Works", pageLink: "/works", id: 2 },
  { displayName: "About Me", pageLink: "/about-me", id: 3 },
  { displayName: "Contact", pageLink: "/contact", id: 4 },
];
const NavBar = () => {
  const location = useLocation();
  return (
    <Box width="100%" mt="0">
      <Show above="sm">
        <Tabs
          variant="unstyled"
          defaultIndex={navItems.findIndex(
            (item) => item.pageLink === location.pathname
          )}
          width="100%"
        >
          <TabList>
            <HStack
              gap="8vh"
              borderRadius="2vh"
              padding="2vh"
              width="100%"
              justifyContent="space-around"
            >
              <Box
                alignSelf="flex-start"
                display="flex "
                gap={10}
                alignItems="center"
              >
                <Link to="/">
                  <Text fontSize="4xl" fontWeight="bold">
                    Kiyotomm
                  </Text>
                </Link>
                <GitHubme />
              </Box>
              <HStack gap="7vh">
                <Box maxWidth="30vw"></Box>
                {navItems.map((item) => (
                  <Link to={item.pageLink}>
                    <Tab
                      key={item.id}
                      _selected={{
                        fontWeight: "bold",
                        borderBottom: "2px solid black",
                        // borderBottom:
                        //   location.pathname === "/worksPage"
                        //     ? "2px solid white"
                        //     : "2px solid black",
                      }}
                    >
                      <Text fontSize="2xl">{item.displayName}</Text>
                    </Tab>
                  </Link>
                ))}
              </HStack>
            </HStack>
          </TabList>
        </Tabs>
      </Show>
      <Hide above="sm">
        <PhoneNavbar />
      </Hide>
    </Box>
  );
};

export default NavBar;
