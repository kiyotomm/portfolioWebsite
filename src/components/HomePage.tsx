import { Box, HStack, Text, Image } from "@chakra-ui/react";
import image from "../Photos/IMG_2211.jpg";
import { TextGenerateEffectDemo } from "./aceternityUI/TextGenerateEffect/TextGenerateEffectComponent";

const HomePage = () => {
  return (
    <div className="flex flex-wrap gap-[7vh] justify-center">
      <div>
        <img
          src={image}
          boxSize={{ base: "300px", sm: "500px" }}
          objectFit="cover"
          className="border-radius=[5vh]"
        />
      </div>
      <div className="w-2.5">
        {/* <Text fontSize="2xl">
          Hello! I'm <Text as="b">Tom</Text> I'm a passionate web developer with
          a focus on <br />
          <Text as="u">React and TypeScript</Text>, creating sleek, interactive
          websites and <br />
          applications. I enjoy crafting intuitive user experiences and solving
          <br />
          challenges through clean code.
        </Text> */}
        <Text fontSize="3xl">
          <TextGenerateEffectDemo />
        </Text>
      </div>
    </div>
  );
};

export default HomePage;
