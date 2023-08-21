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
import { Container } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { BsMouse3 } from "react-icons/bs";

const Hero = () => {
  const textLines = [
    ``,
    `work on creating`,
    `craft innovative web experience.`,
  ];

  return (
    <Container maxW="1240px">
      <Box
        name="top"
        maxW={{ sm: "550px", md: "700px", lg: "1140px" }}
        p={3}
        mx="auto"
        textAlign={{ base: "center", sm: "left", lg: "left" }}
        mt={{ base: 8 }}
      >
        <Heading
          as="h1"
          size={{ base: "sm" }}
          fontSize={{ base: "16px" }}
          color="#FF70C4"
          mb={4}
          sx={{ wordSpacing: "5px" }}
          className="bounce-in-top"
        >
          Hello, my name is
        </Heading>

        <Heading
          as="h2"
          letterSpacing={3}
          fontFamily="Alegreya Sans"
          fontSize={{ base: "32px", lg: "70px" }}
          className="tracking-in-expand"
        >
          Alimi Adeyemi.
        </Heading>

        <Heading
          as="h3"
          letterSpacing={3}
          color="#8A8B8D"
          fontSize={{ base: "32px", lg: "70px" }}
          fontFamily="Alegreya Sans"
        >
          I craft innovative web experience.
        </Heading>
        <Text
          color="#B9BABB"
          mb={4}
          fontWeight="bold"
          fontSize={{ base: "16px" }}
          w={{ sm: "450px", lg: "550px" }}
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
        maxW={{ sm: "550px", md: "700px", lg: "1140px" }}
        alignItems="center"
        p={3}
        mx="auto"
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
        <BsMouse3 fontSize="2xl" color="#FF70C4" />
      </Flex>
    </Container>
  );
};

export default Hero;
