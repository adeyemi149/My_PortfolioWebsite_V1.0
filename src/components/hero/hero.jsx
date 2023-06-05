import React from "react";
import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import Typed from "react-typed";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { Link } from "react-scroll";
import Ztext from "react-ztext";

const Hero = () => {
  const textLines = [
    ``,
    `work on creating`,
    `craft innovative web experience.`,
  ];

  return (
    <>
      <Box
        name="top"
        maxW={{ sm: "550px", md: "700px", lg: "1140px" }}
        mx={{ base: "auto", lg: "80px" }}
        mb={2}
        p={3}
        textAlign={{ base: "center", sm: "left", lg: "left" }}
      >
        <Heading
          as="h1"
          textAlign={{ base: "center", sm: "left", lg: "left" }}
          size={{ base: "sm" }}
          fontSize={{ base: "14px" }}
          color="#FF70C4"
          mb={4}
          className="bounce-in-top"
        >
          Hello, my name is
        </Heading>

        <Heading
          as="h2"
          textAlign={{ base: "center", sm: "left", md: "left" }}
          letterSpacing={3}
          fontFamily="Alegreya Sans"
          fontSize={{ base: "32px", lg: "70px" }}
          className="tracking-in-expand"
        >
          Alimi Adeyemi.
        </Heading>

        <Heading
          as="h3"
          textAlign={{ base: "center", sm: "left", md: "left" }}
          letterSpacing={3}
          color="#8A8B8D"
          fontSize={{ base: "32px", lg: "70px" }}
          fontFamily="Alegreya Sans"
        >
          I <Typed strings={textLines} backSpeed={60} typeSpeed={100} />
        </Heading>
        <Text
          color="#B9BABB"
          mb={4}
          fontWeight="bold"
          fontSize={{ base: "16px" }}
          textAlign={{ base: "center", sm: "left", md: "left" }}
          w={{ sm: "450px" }}
          className="fade-in-bck"
        >
          I&apos;m a software engineer that focuses on developing
          &#40;occasionally designing&#41; innovative solutions that push
          boundaries of what is possible of the web.
        </Text>
        <Flex
          justifyContent={{ base: "center", sm: "left", lg: "left" }}
          className="fade-in-fwd"
        >
          <Link
            smooth={true}
            duration={450}
            offset={-70}
            to="contact"
            className="roll-in-blurred-bottom"
          >
            <Button
              fontSize="sm"
              color="#FF70C4"
              transition="247ms"
              background="transparent"
              _hover={{ background: "rgba(0, 0, 0, 0.11)" }}
              border="2px solid #FF70C4"
              letterSpacing={1.5}
              fontWeight="bold"
            >
              CONTACT ME!
            </Button>
          </Link>
        </Flex>
      </Box>
      <Flex
        alignItems="center"
        textAlign={{ base: "center", sm: "center", md: "left" }}
        pl={3}
        mt={{ base: 0, md: "35" }}
      >
        <Text
          fontWeight="extrabold"
          letterSpacing={4}
          fontFamily="Alegreya Sans"
          fontSize="12px"
        >
          SCROLL DOWN
        </Text>
        <ChevronDownIcon fontSize="2xl" color="#FF70C4" />
      </Flex>
    </>
  );
};

export default Hero;
