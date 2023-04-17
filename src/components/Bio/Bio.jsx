import React from "react";
import { BioSec, BioYear } from "./bioStyles";
import { Box, Heading } from "@chakra-ui/react";

const Bio = () => {
  return (
    <Box name="bio" maxW={{ sm: "550px", md: "700px", lg: "1140px" }} p={3} mx="auto">
      <Heading
        size={{ base: "xl", sm: "xl", md: "lg" }}
        textAlign={{ sm: "left", md: "center", lg: "center" }}
        as="h1"
        variant="section-title"
      >
        Bio
      </Heading>
      <BioSec>
        <BioYear>1998</BioYear>
        Born in Lagos, Nigeria
      </BioSec>
      <BioSec>
        <BioYear>2021</BioYear>
        Completed my Bachelors Degree in Computer Science at Bells University of
        Technology
      </BioSec>
    </Box>
  );
};

export default Bio;
