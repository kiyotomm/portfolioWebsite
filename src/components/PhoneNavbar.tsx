import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { navItems } from "./NavBar";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import GitHubme from "./GitHubme";

function PhoneNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Box display="flex" gap="2">
            <Link to="/">
              <Text fontSize="2xl" fontWeight="bold">
                Kiyotomm
              </Text>
            </Link>
            <GitHubme />
          </Box>
          <Button onClick={onOpen} m={4}>
            <HamburgerIcon />
          </Button>
        </Box>
      </Box>
      <Drawer onClose={onClose} isOpen={isOpen} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display="flex" gap="3">
            {" "}
            <Link to="/">
              <Text fontSize="2xl" fontWeight="bold">
                Kiyotomm
              </Text>
            </Link>
            <GitHubme />
          </DrawerHeader>
          <DrawerBody
            display="flex"
            flexDirection="column"
            gap="1.5vh"
            fontSize="2xl"
          >
            {navItems.map((item) => (
              <Link to={item.pageLink} onClick={onClose} className="underline">
                <Text key={item.id}>{item.displayName}</Text>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PhoneNavbar;
