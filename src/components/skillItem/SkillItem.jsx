import React from "react";
import { Flex } from "@chakra-ui/react";

const SkillItem = ({ children }) => {
  return (
    <Flex
      background="gray.200"
      color="gray.600"
      px={3}
      py={2}
      borderRadius={3}
      marginRight={3}
      fontSize="13px"
      fontWeight="bold"
      flexWrap="wrap"
      gap={2}
    >
      {children}
    </Flex>
  );
};

export default SkillItem;
