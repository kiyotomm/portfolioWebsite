import { HStack, Text, Tabs, TabList, Tab } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const navItems = [
    { page: "Home", pageLink: "/", id: 1 },
    { page: "Works", pageLink: "worksPage", id: 2 },
    { page: "About me", pageLink: "aboutMe", id: 3 },
  ];
  console.log(Tab);

  return (
    <Tabs listStyleType="none">
      <HStack gap="8vh" borderRadius="2vh" padding="2vh">
        {navItems.map((item) => (
          <TabList key={item.id}>
            <Tab
              aria-selected={location.pathname === item.pageLink ? true : false}
            >
              <Link to={item.pageLink}>
                <Text fontSize="2xl">{item.page}</Text>
              </Link>
            </Tab>
          </TabList>
        ))}
      </HStack>
    </Tabs>
  );
};

export default NavBar;
