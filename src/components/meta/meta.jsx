import React from "react";
import { Text } from "@chakra-ui/react";

const Meta = ({ children }) => {
  return (
    <Text
      bg="#e2e8f08c"
      color="#26ff6beb"
      display="inline-block"
      fontSize="14px"
      px="4px"
      py=".5px"
      borderRadius={3}
      mx={4}
    >
      {children}
    </Text>
  );
};

export default Meta;
