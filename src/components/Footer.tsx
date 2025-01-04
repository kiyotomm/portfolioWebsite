import { Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  const date = new Date();
  return (
    <VStack>
      <Text as="b">© {date.getFullYear()} kiyotomm. All rights reserved.</Text>
      <Text>"walang kukulong tubig sa patay sindi na kalan"</Text>
    </VStack>
  );
};

export default Footer;
