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

function PhoneNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Link to="/">
            <Text fontSize="2xl" fontWeight="bold">
              Kiyotomm
            </Text>
          </Link>
          <Button onClick={onOpen} m={4}>
            <HamburgerIcon />
          </Button>
        </Box>
      </Box>
      <Drawer onClose={onClose} isOpen={isOpen} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {" "}
            <Link to="/">
              <Text fontSize="2xl" fontWeight="bold">
                Kiyotomm
              </Text>
            </Link>
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
