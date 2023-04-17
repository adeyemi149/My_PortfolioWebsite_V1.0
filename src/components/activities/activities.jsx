import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Activities } from "../Bio/bioStyles";

const Activity = () => {
  return (
    <Box
      maxW={{ sm: "550px", md: "700px", lg: "1140px" }}
      p={3}
      mx="auto"
      my={6}
    >
      <Heading
        textAlign={{ sm: "left", md: "center", lg: "center" }}
        size={{ base: "xl", sm: "xl", md: "lg" }}
        as="h1"
        variant="section-title"
      >
        I 🤍
      </Heading>
      <Activities>
        Music, Watching and Playing football, Eating, Sci-fi Movies,{" "}
      </Activities>
    </Box>
  );
};

export default Activity;
