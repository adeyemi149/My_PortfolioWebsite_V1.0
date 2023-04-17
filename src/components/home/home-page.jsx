import React from "react";
import Hero from "../hero/hero";
import Layout from "../Layout/layout";
import Bio from "../Bio/Bio";
import Activity from "../activities/activities";
import Contact from "../contact/contact";
import { Box, Flex } from "@chakra-ui/react";
import About from "../About/About";

const Homepage = () => {
  return (
    <>
      <Layout>
        <Flex
          backgroundImage="url('assests/images/hero_background-img.png')"
          backgroundSize="cover"
          backgroundPosition="center"
          height="100vh"
          flexDirection="column"
          justifyContent="center"
          gap={8}
          mt={{ base: "8", lg: "12" }}
        >
          <Hero />
        </Flex>
        <Box
          py="5rem"
          color="black"
          background="#ffffff"
          height={{ lg: "100vh" }}
        >
          <About />
        </Box>
        <Box
          py="5rem"
          color="black"
          background="#e8e8e8"
          height={{ lg: "100vh" }}
        >
          <Bio />
          <Activity />
        </Box>
        <Box py="5rem" height="100vh" mb={4}>
          <Contact />
        </Box>
      </Layout>
    </>
  );
};

export default Homepage;
