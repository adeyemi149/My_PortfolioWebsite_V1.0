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
import { Container } from "@chakra-ui/react";
import NavLink from "../NavLink";
import NavSidebar from "../NavSidebar";
import Image from "next/image";

const Navbar = () => {
  const styles = useColorModeValue(<SunIcon />, <MoonIcon />);
  const [fix, setFix] = useState(false);
  const [click, setClick] = useState(false);

  const closeMenu = () => setClick(true);

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
      position="fixed"
      top={0}
      background={fix ? "#ffffff" : "#08080A"}
      borderBottom={fix ? "1px solid black" : ""}
      transition="247ms ease-in"
      zIndex={11}
      mx="auto"
      width="100%"
    >
      <Heading as="h1" size="lg" color={fix ? "#08080A" : "#fffff"}>
        <NextLink href="/">
          <Image
            src="/Portfolio_icon.png"
            width={40}
            height={40}
            alt="Portfolio Icon"
          />
        </NextLink>
      </Heading>
      <Spacer />
      <Box>
        <Box>
          <NavLink LinkText="ABOUT" fix={fix} to="about" />
          <NavLink LinkText="BIO" fix={fix} to="bio" />
          <NavLink LinkText="CONTACT" fix={fix} to="contact" />
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
            <a href="/Resume.pdf" target="_blank">
              RESUME
            </a>
          </Text>
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
        </Box>
        <NavSidebar />
      </Box>
    </Flex>
  );
};

export default Navbar;
