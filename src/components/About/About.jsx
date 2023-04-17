import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  useColorModeValue,
  Grid,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import SkillItem from "../skillItem/SkillItem";
import {
  HtmlLogo,
  CssLogo,
  JsLogo,
  CsharpLogo,
  FirebaseLogo,
  GithubLogo,
  NextLogo,
  ReactLogo,
  SqlServerLogo,
  TsLogo,
} from "../svgs/SvgIcons";

const About = () => {
  const skillsSet = [
    { skill: "HTML", logo: <HtmlLogo /> },
    { skill: "CSS", logo: <CssLogo /> },
    { skill: "JAVASCRIPT", logo: <JsLogo /> },
    { skill: "TYPESCRIPT", logo: <TsLogo /> },
    { skill: "NEXTJS", logo: <NextLogo /> },
    { skill: "REACT", logo: <ReactLogo /> },
    { skill: "CSHARP", logo: <CsharpLogo /> },
    { skill: "SQL", logo: <SqlServerLogo /> },
    { skill: "FIREBASE", logo: <FirebaseLogo /> },
    { skill: "GIT/GITHUB", logo: <GithubLogo /> },
  ];
  const bg = useColorModeValue("#67c2c0", "#22948e");
  return (
    <>
      <Box
        name="about"
        maxW={{ sm: "550px", md: "700px", lg: "1140px" }}
        p={3}
        mx="auto"
      >
        <Heading
          as="h1"
          variant="section-title"
          size={{ base: "xl", sm: "xl", md: "lg" }}
          textAlign={{ sm: "left", md: "center", lg: "center" }}
          mb={8}
        >
          About Me
        </Heading>
        <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={6}>
          <Box>
            <Heading
              fontWeight="extrabold"
              as="h2"
              mb={3}
              size="sm"
              textAlign="left"
            >
              Get to Know me
            </Heading>
            <Text lineHeight={7} mb={3}>
              Greetings! My name is Alimi Adeyemi, and I am a dedicated software
              engineer with a passion for creating exceptional products using
              cutting-edge web technologies harnessing the power of technology
              to deliver innovative solutions.
            </Text>
            <Text lineHeight={7}>
              If you have a project or job opportunity that requires knowledge
              in software engineering, I would be delighted to hear from you. I
              am always eager to connect with like-minded individuals who share
              my enthusiasm for using technology to make a difference.
            </Text>
          </Box>
          <Box>
            <Heading
              mb={3}
              fontWeight="extrabold"
              as="h2"
              size="sm"
              textAlign="left"
            >
              Skills
            </Heading>
            <Wrap>
              {skillsSet?.map((skills, index) => (
                <SkillItem key={index}>
                  {skills.logo}
                  {skills.skill}
                </SkillItem>
              ))}
            </Wrap>
          </Box>
        </Grid>
        <Box textAlign="center" mt={6}>
          <NextLink href="portfolio/portfolio" as="/portfolio">
            <Button
              as={motion.button}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              _hover={{ bg: "#22948e" }}
              rightIcon={<ChevronRightIcon />}
              bg={bg}
            >
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Box>
    </>
  );
};

export default About;
