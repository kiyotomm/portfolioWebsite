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

function PhoneNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="red">
        <Button onClick={onOpen} m={4}>
          open
        </Button>
      </Box>
      <Drawer onClose={onClose} isOpen={isOpen} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            {navItems.map((item) => (
              <Link to={item.pageLink} onClick={onClose}>
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
