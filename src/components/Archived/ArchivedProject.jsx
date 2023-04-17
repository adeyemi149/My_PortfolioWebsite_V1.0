import React, { useState } from "react";
import { Text, Box, Heading, Grid, Flex, Wrap } from "@chakra-ui/react";
import { BsFolder } from "react-icons/bs";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { buttonVariant } from "../../Variant";
import NextLink from "next/link";
import { motion } from "framer-motion";

export const ArchivedProject = () => {
  return (
    <Box maxW={{ sm: "550px", md: "700px", lg: "1140px" }} mx="auto" mb={5}>
      <Heading as="h2" textAlign="center">
        Other Projects
      </Heading>
      <Heading
        as="h4"
        fontSize="16px"
        textAlign="center"
        mb={4}
        color="#FF70C4"
      >
        view the archive
      </Heading>
      <Wrap
        spacing="30px"
        maxW={{ base: "650px", sm: "650px", lg: "750px" }}
        mx="auto"
        pt={2}
        justify="center"
      >
        <ArchivedProjectItem
          projectName="Todo App"
          summary="Built an efficient todo app with add, check, delete, edit functions and motivational quotes API."
          stacks={["React", "Css", "Javascript", "Quotable API"]}
          gitHubURL="https://github.com/adeyemi149/React-todo-app"
          URL="https://web-app-todo.netlify.app/"
        />
        <ArchivedProjectItem
          projectName="Password Generator"
          summary="A password generator that helps me generate unique random passwords. To use with Signing up or registering to any application/sites."
          stacks={["Html", "Css", "Javascript"]}
          gitHubURL="https://github.com/adeyemi149/Password__Generator"
          URL="https://password-generator-adeyemi149.vercel.app/"
        />
      </Wrap>
    </Box>
  );
};

export const ArchivedProjectItem = ({
  projectName,
  summary,
  stacks,
  gitHubURL,
  URL,
}) => {
  const [hovering, setHovering] = useState(false);
  return (
    <Box
      as={motion.div}
      whileHover={{ translateY: "-5px", color: "#FF70C4" }}
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
      transition="247ms linear"
      background="#232428"
      w="100%"
      h="268px"
      maxW="230px"
      mx="auto"
      p={4}
      borderRadius={5}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        color="rgba(255, 255, 255, 0.9)"
      >
        <BsFolder size={30} color="#FF70C4" />
        <Box display="flex" gap={2}>
          <NextLink href={URL} target="_blank" rel="noreferrer">
            <motion.button
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariant}
            >
              <FiExternalLink />
            </motion.button>
          </NextLink>
          <NextLink href={gitHubURL} target="_blank" rel="noreferrer">
            <motion.button
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariant}
            >
              <FiGithub />
            </motion.button>
          </NextLink>
        </Box>
      </Flex>
      <Heading
        fontSize="20px"
        mt={8}
        as={motion.h3}
        color={hovering ? "#FF70C4" : "inherit"}
      >
        {projectName}
      </Heading>
      <Text
        height="100px"
        pt={3}
        fontSize="12px"
        color="rgba(255, 255, 255, 0.8)"
      >
        {summary}
      </Text>
      <Wrap pt={4} fontSize="12px" color="rgba(255, 255, 255, 0.5)">
        {stacks?.map((stack) => (
          <Text>{stack}</Text>
        ))}
      </Wrap>
    </Box>
  );
};
