import { HStack, Text, Tabs, TabList, Tab } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const navItems = ["Home", "Works", "About me"];
  console.log(Tab);

  return (
    <Tabs listStyleType="none">
      {" "}
      <HStack gap="8vh" borderRadius="2vh" padding="2vh">
        {/* {navItems.map((items, ind) => (
          <TabList>
            <Tab key={ind}>
              <Text fontSize="2xl">{items}</Text>
            </Tab>
          </TabList>
        ))} */}
        <TabList>
          <Tab>
            <Link to={"/"}>
              <Text fontSize="2xl">Home</Text>
            </Link>
          </Tab>
        </TabList>
        <TabList>
          <Tab>
            <Link to={"/worksPage"}>
              <Text fontSize="2xl">Works</Text>
            </Link>
          </Tab>
        </TabList>
        <TabList>
          <Tab>
            <Text fontSize="2xl">About me</Text>
          </Tab>
        </TabList>
      </HStack>
    </Tabs>
  );
};

export default NavBar;
