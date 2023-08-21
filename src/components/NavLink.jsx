import React from "react";
import { Link } from "react-scroll";
import { Text } from "@chakra-ui/react";

const NavLink = ({ LinkText, fix, to }) => {
  return (
    <>
      <Link smooth={true} spy={true} duration={450} offset={-100} to={to}>
        <Text
          display={{ base: "none", sm: "none", md: "inline" }}
          ml={4}
          fontSize="sm"
          color={fix ? "#08080A" : "#fffff"}
          cursor="pointer"
          transition="247ms"
          _hover={{ color: "#FF70C4" }}
          letterSpacing={1.5}
          fontWeight="bold"
        >
          {LinkText}
        </Text>
      </Link>
    </>
  );
};

export default NavLink;
