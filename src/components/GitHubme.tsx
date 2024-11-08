import { Box, Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
const GitHubme = () => {
  return (
    <Box>
      <a href="https://github.com/kiyosdesu" target="_blank">
        <Icon as={FaGithub} boxSize={{ base: "4.5vh", md: "2.5vh" }} />
      </a>
    </Box>
  );
};

export default GitHubme;
