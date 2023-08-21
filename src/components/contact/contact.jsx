import {
  Box,
  Heading,
  Stack,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  Flex,
  Grid,
  Text,
  Container,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast";
import { IconContext } from "react-icons";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import NextLink from "next/link";
import { buttonVariant } from "../../Variant";
import { EmailSvg } from "../svgs/SvgIcons";
import styled from "@emotion/styled";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { Link, animateScroll as scroll } from "react-scroll";

const Contact = () => {
  const bg = useColorModeValue("", "#22948e");
  const [state] = useForm("xjvdonbo");
  if (state.succeeded) {
    toast.success("Your message was successfully submitted");
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Container maxW="1240px">
      <Box
        maxW={{ sm: "550px", md: "700px", lg: "1140px" }}
        p={3}
        mx="auto"
        mt={3}
        name="contact"
      >
        <Heading
          textAlign={{ sm: "left", md: "center", lg: "center" }}
          size={{ base: "xl", sm: "xl", md: "lg" }}
          as="h1"
          variant="section-title"
        >
          Get In Touch
        </Heading>
        <Text
          color="#B9BABB"
          mb={4}
          fontWeight="bold"
          fontSize={{ base: "16px" }}
          textAlign="center"
          mx="auto"
          w="100%"
          maxW="550px"
        >
          My inbox is always open. Whether you have a question, Job opening or
          just want to say hi, i&#39;ll try my very best to get back to you!
        </Text>
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <Box w="100%" maxW={{ base: "300px", lg: "440px" }} mx="auto">
            <EmailSvg />
          </Box>
          <form action="https://formspree.io/f/xjvdonbo" method="POST">
            <Stack
              spacing={3}
              w="100%"
              maxW={{ base: "300px", lg: "440px" }}
              mx="auto"
            >
              <Flex gap={2}>
                <Input
                  isInvalid
                  errorBorderColor="gray.200"
                  placeholder="Enter your name"
                  size="sm"
                  name="Name"
                />
                <Input
                  isInvalid
                  errorBorderColor="gray.200"
                  placeholder="Enter your email"
                  size="sm"
                  name="Email"
                />
              </Flex>
              <Textarea
                isInvalid
                errorBorderColor="gray.200"
                placeholder="Enter your message"
                size="sm"
                resize="none"
                name="Message"
                height="150px"
              />
              <Button
                as={motion.button}
                whileTap={{ scale: 0.9 }}
                _hover={{ bg: "#54ccc6" }}
                fontSize="18px"
                bg={bg}
                type="submit"
              >
                Shoot &rarr;
              </Button>
            </Stack>
          </form>
        </Grid>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        <Flex
          mt="40px"
          gap={3}
          justifyContent={{
            base: "space-evenly",
            sm: "space-evenly",
            md: "center",
          }}
        >
          <IconContext.Provider value={{ size: "1.5em" }}>
            <NextLink
              href="https://github.com/adeyemi149/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariant}
              >
                <BsGithub />
              </motion.button>
            </NextLink>
            <NextLink
              href="https://twitter.com/alimi_adeyemi"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariant}
              >
                <BsTwitter />
              </motion.button>
            </NextLink>
            <NextLink
              href="https://www.linkedin.com/in/alimi-yemi/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariant}
              >
                <IoLogoLinkedin />
              </motion.button>
            </NextLink>
          </IconContext.Provider>
        </Flex>
        <Flex justifyContent="flex-end">
          <Link
            smooth={true}
            spy={true}
            duration={450}
            offset={-150}
            onClick={scrollToTop}
          >
            <Arrow boxShadow="dark-lg">
              <ChevronUpIcon w="25px" h="25px" color="black" />
            </Arrow>
          </Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Contact;

const Arrow = styled(Flex)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #fff;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4;
`;
