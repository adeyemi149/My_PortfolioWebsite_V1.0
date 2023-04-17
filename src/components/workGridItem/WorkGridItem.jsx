import React from "react";
import { Box, Image } from "@chakra-ui/react";

const WorkGridItem = ({ thumbnail, title }) => {
  return (
    <Box width={{ sm: "100%", md: "100%", lg: "100%" }}>
      <Image
        src={thumbnail}
        alt={title}
        loading="eager"
        placeholder="blur"
        boxShadow="dark-lg"
        borderRadius="12px"
        mt={5}
      />
    </Box>
  );
};

export default WorkGridItem;
