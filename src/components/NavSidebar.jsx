import React from "react";
import {
  Button,
  Center,
  Flex,
  Heading,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  useColorMode,
  useColorModeValue,
  Box,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { Link } from "react-scroll";

const NavSidebar = () => {
  const color = useColorModeValue("black", "white");

  return (
    <>
      <Center display={{ base: "inline", sm: "inline", md: "none" }}>
        <Popover>
          <PopoverTrigger>
            <Button bg="grey" w="60px" h="40px" _hover={{ background: "grey" }}>
              <HamburgerIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent overflow="hidden" bg="#36393e">
            <NextLink color={color} href="/">
              <PopoverBody
                _hover={{
                  color: "#FF70C4",
                  bg: "rgba(0, 0, 0, 0.15)",
                }}
              >
                Home
              </PopoverBody>
            </NextLink>
            <Link
              smooth={true}
              spy={true}
              duration={450}
              offset={-150}
              to="about"
            >
              <PopoverBody
                _hover={{
                  color: "#FF70C4",
                  bg: "rgba(0, 0, 0, 0.15)",
                }}
              >
                About
              </PopoverBody>
            </Link>
            <Link smooth={true} duration={450} offset={-150} to="bio">
              <PopoverBody
                _hover={{
                  color: "#FF70C4",
                  bg: "rgba(0, 0, 0, 0.15)",
                }}
              >
                Bio
              </PopoverBody>
            </Link>
            <Link smooth={true} duration={450} offset={-70} to="contact">
              <PopoverBody
                _hover={{
                  color: "#FF70C4",
                  bg: "rgba(0, 0, 0, 0.15)",
                }}
              >
                Contact
              </PopoverBody>
            </Link>
            <NextLink href="portfolio/portfolio" as="/portfolio">
              <PopoverBody
                _hover={{
                  color: "#FF70C4",
                  bg: "rgba(0, 0, 0, 0.15)",
                }}
              >
                Portfolio
              </PopoverBody>
            </NextLink>
            <PopoverBody
              _hover={{
                color: "#FF70C4",
                bg: "rgba(0, 0, 0, 0.15)",
              }}
            >
              <a href="/Resume.pdf" target="_blank">
                Resume
              </a>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Center>
    </>
  );
};

export default NavSidebar;
