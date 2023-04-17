import React, { useState, useEffect } from "react";
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
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { Link } from "react-scroll";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const styles = useColorModeValue(<SunIcon />, <MoonIcon />);
  const color = useColorModeValue("black", "white");
  const colorText = useColorModeValue("black", "#ffffffd1");
  const togglerColor = useColorModeValue("purple", "orange");
  const [fix, setFix] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  function setFixed() {
    const viewPortHeight = window.innerHeight;
    const hundredVH = 0.95 * viewPortHeight;
    if (window.scrollY >= hundredVH) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
  }, []);

  return (
    <Flex
      p="3"
      alignItems="center"
      gap={2}
      position="fixed"
      top={0}
      background={fix ? "#ffffff" : "#08080A"}
      borderBottom={fix ? "1px solid black" : ""}
      transition="247ms ease-in"
      zIndex={11}
      width="100%"
    >
      <Heading as="h1" size="lg" color={fix ? "#08080A" : "#fffff"}>
        <NextLink href="/">AA.</NextLink>
      </Heading>
      <Spacer />
      <Link smooth={true} spy={true} duration={450} offset={-100} to="about">
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
          ABOUT
        </Text>
      </Link>
      <Link smooth={true} duration={450} offset={-100} to="bio">
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
          BIO
        </Text>
      </Link>
      <Link smooth={true} duration={450} offset={-100} to="contact">
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
          CONTACT
        </Text>
      </Link>
      <NextLink href="portfolio/portfolio" as="/portfolio">
        <Button
          display={{ base: "none", sm: "none", md: "inline" }}
          ml={4}
          fontSize="sm"
          color="#FF70C4"
          transition="247ms"
          background="transparent"
          _hover={{ background: "rgba(0, 0, 0, 0.11)" }}
          border="2px solid #FF70C4"
          letterSpacing={1.5}
          fontWeight="bold"
        >
          PORTFOLIO
        </Button>
      </NextLink>
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
          </PopoverContent>
        </Popover>
      </Center>
    </Flex>
  );
};

export default Navbar;
