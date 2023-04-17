import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Title = ({ children }) => {
  return (
    <Box>
      <NextLink href="/portfolio/portfolio" as="/portfolio">
        <span style={{ color: "#FF70C4", fontSize: "15px" }}>Projects</span>
      </NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <Heading display="inline-block" as="h3" size="md">
        {children}
      </Heading>
    </Box>
  );
};

export default Title;
