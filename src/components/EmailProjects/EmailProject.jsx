import React, { useState } from "react";
import {
  Box,
  Image,
  SimpleGrid,
  Wrap,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { buttonVariant } from "../../Variant";
import Layout from "../Layout/layout";

export const EmailProject = () => {
  return (
    <Layout>
      <SimpleGrid
        maxW={{ base: "650px", sm: "650px", lg: "750px" }}
        mx="auto"
        justifyContent="center"
      >
        <Wrap spacing="30px" display="flex" justify="center">
          <EmailGridItem
            imgUrl="assests/images/GoDaddy_Email.png"
            EmailName="GoDaddy Email"
            EmailType="Promotional HTML Email"
            github="https://github.com/adeyemi149/GoDaddyEmail"
            url="https://godaddy-email.vercel.app/"
            detailsPage="/emailDetails/goDaddy"
          />
          <EmailGridItem
            imgUrl="assests/images/dribble_Email.png"
            EmailName="Dribble Email"
            EmailType="NewsLetter HTML Email"
            github="https://github.com/adeyemi149/DribbleEmail"
            url="https://dribble-email.vercel.app/"
            detailsPage="/emailDetails/dribbleEmail"
          />
          <EmailGridItem
            imgUrl="assests/images/Statista_Email.png"
            EmailName="Statista Email"
            EmailType="NewsLetter HTML Email"
            github="https://github.com/adeyemi149/DribbleEmail"
            url="https://statista-lemon.vercel.app/"
            detailsPage="/emailDetails/statista"
          />
        </Wrap>
      </SimpleGrid>
    </Layout>
  );
};

export const EmailGridItem = ({
  imgUrl,
  EmailName,
  EmailType,
  url,
  github,
  detailsPage,
}) => {
  const [hovering, setHovering] = useState(false);
  return (
    <Box
      background="#434343"
      textAlign="center"
      borderRadius={5}
      overflow="hidden"
      width="230px"
      position="relative"
    >
      <NextLink href={detailsPage}>
        <Box
          as={motion.div}
          whileHover={{ opacity: 0.5 }}
          onHoverStart={() => setHovering(true)}
          onHoverEnd={() => setHovering(false)}
        >
          <Image
            src={imgUrl}
            width="100%"
            alt="GoDaddy"
            cursor="pointer"
            transition="247ms"
          />
        </Box>
      </NextLink>
      <Box
        position="absolute"
        top="30%"
        left="40%"
        opacity={hovering ? 1 : 0}
        _hover={{ opacity: 1 }}
        cursor="pointer"
      >
        <HiOutlineMenuAlt2 style={{ fontSize: "50px" }} />
      </Box>
      <Heading as="h1" fontSize="14px" padding={3} letterSpacing={2}>
        {EmailName}
      </Heading>
      <Text as="p" fontSize="10px" px={2} color="#FF70C4">
        {EmailType}
      </Text>
      <Flex gap={2} justifyContent="end" padding={2}>
        <NextLink href={url} target="_blank" rel="noreferrer">
          <motion.button
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariant}
          >
            <FiExternalLink />
          </motion.button>
        </NextLink>
        <NextLink href={github} target="_blank" rel="noreferrer">
          <motion.button
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariant}
          >
            <FiGithub />
          </motion.button>
        </NextLink>
      </Flex>
    </Box>
  );
};
