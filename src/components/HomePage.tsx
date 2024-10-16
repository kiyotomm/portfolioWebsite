import { Box, HStack, Text, Image } from "@chakra-ui/react";
import image from "../Photos/IMG_2211.jpg";

const HomePage = () => {
  return (
    <HStack gap="7vh">
      <Box boxSize="sm">
        <Image src={image} borderRadius="5vh" />
      </Box>
      <Box>
        <Text fontSize="2xl">
          Hello! I'm <Text as="b">Tom</Text> I'm a passionate web developer with
          a focus on <br />
          <Text as="u">React and TypeScript</Text>, creating sleek, interactive
          websites and <br />
          applications. I enjoy crafting intuitive user experiences and solving
          <br />
          challenges through clean code.
        </Text>
      </Box>
    </HStack>
  );
};

export default HomePage;
