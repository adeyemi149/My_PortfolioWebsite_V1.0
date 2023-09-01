import React from "react";
import {
  Box,
  LinkBox,
  Image,
  Button,
  Text,
  Grid,
  Flex,
  Heading,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { FiExternalLink, FiMoreVertical, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { buttonVariant } from "../../Variant";

export const ComingSoonProject = ({
  id,
  title,
  thumbnail,
  skills,
  toPage,
  url,
  github,
  about,
}) => {
  const router = useRouter();
  const img = useColorModeValue(
    "assests/images/webLightMode.png",
    "assests/images/web.png"
  );

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        sm: "repeat(2, 1fr)",
        lg: "repeat(2, 1fr)",
      }}
      maxW={{ base: "650px", sm: "650px", lg: "750px" }}
      mx="auto"
      mb={8}
      background="#121417"
      backdrop-filter="blur(20px)"
      boxShadow="dark-lg"
      sx={{
        "&:nth-child(even)": { direction: "rtl", justifyContent: "flex-start" },
      }}
      p={4}
      fontFamily="Inter"
      position="relative"
    >
      <Box py={4} w="100%" overflow="hidden">
        <Image
          src={thumbnail}
          alt={title}
          loading="eager"
          placeholder="blur"
          maxW="100%"
          height={{ base: "auto", sm: "none" }}
        />
      </Box>
      <Box>
        <Heading
          as="h1"
          fontSize="14px"
          letterSpacing={1}
          color="#FF70C4"
          textAlign="right"
          mb={2}
        >
          Featured Project
        </Heading>
        <Heading as="h2" fontSize="18px" textAlign="right" mb={6}>
          {title}
        </Heading>
        <Box
          background="#232428"
          boxShadow="lg"
          textAlign="right"
          color="#a9a9a9"
          mb={3}
          p={2}
          w="100%"
          fontSize="14px"
        >
          {about}
        </Box>
        <Wrap
          mb={2}
          display="flex"
          justifyContent="flex-end"
          color="rgba(255, 255, 255, 0.5)"
          fontSize="12px"
        >
          {skills?.map((skill, index) => (
            <Text key={index} pr={4}>
              {skill}
            </Text>
          ))}
        </Wrap>
        <Flex justifyContent="flex-end" gap={2}>
          <NextLink href={url} target="_blank" rel="noreferrer">
            <motion.button
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariant}
            >
              <FiExternalLink style={{ width: "24px", height: "24px" }} />
            </motion.button>
          </NextLink>
          <NextLink href={github} target="_blank" rel="noreferrer">
            <motion.button
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariant}
            >
              <FiGithub style={{ width: "24px", height: "24px" }} />
            </motion.button>
          </NextLink>
          <NextLink href={toPage} rel="noreferrer">
            <motion.button
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              whileTap="tap"
              variants={buttonVariant}
            >
              <FiMoreVertical style={{ width: "24px", height: "24px" }} />
            </motion.button>
          </NextLink>
        </Flex>
      </Box>
    </Grid>
  );
};
