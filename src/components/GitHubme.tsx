import { Box, Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
const GitHubme = () => {
  return (
    <Box>
      <a href="https://github.com/kiyotomm" target="_blank">
        <Icon as={FaGithub} boxSize={{ base: "4.5vh", md: "4.5vh" }} />
      </a>
    </Box>
  );
};

export default GitHubme;
