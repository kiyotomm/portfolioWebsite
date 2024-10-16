import { HStack, Text, Tabs, TabList, Tab } from "@chakra-ui/react";

const NavBar = () => {
  const navItems = ["Home", "Works", "About me"];
  return (
    <Tabs listStyleType="none">
      {" "}
      <HStack gap="8vh" borderRadius="2vh" padding="2vh">
        {navItems.map((items, ind) => (
          <TabList>
            <Tab key={ind}>
              <Text fontSize="2xl">{items}</Text>
            </Tab>
          </TabList>
        ))}
      </HStack>
    </Tabs>
  );
};

export default NavBar;
