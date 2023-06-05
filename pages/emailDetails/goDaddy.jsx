import Layout from "@/src/components/Layout/layout";
import React from "react";
import { Box, List, ListItem, Link, Text, Image } from "@chakra-ui/react";
import Title from "@/src/components/title/title";
import Meta from "@/src/components/meta/meta";
import { LinkIcon } from "@chakra-ui/icons";
import WorkGridItem from "@/src/components/workGridItem/WorkGridItem";
import { VmwareLandingPage } from "../../public/images";

const GoDaddyDetails = () => {
  return (
    <Layout>
      <Box
        maxW={{ sm: "550px", md: "700px", lg: "1140px" }}
        py="5rem"
        mx="auto"
        mt={20}
      >
        <Title>GoDaddy Promotional Email</Title>
        <Text mt={5} textIndent={15}></Text>
        <List mt={5}>
          <ListItem mb="10px">
            <Meta>LAUNCH PROJECT</Meta>
            <Link href="https://godaddy-email.vercel.app/">GoDaddy.Email</Link>
            <LinkIcon ml={1} color="#ff506f" />
          </ListItem>
          <ListItem mb="10px">
            <Meta>SOURCE CODE</Meta>
            <Link
              target="_blank"
              href="https://github.com/adeyemi149/GoDaddyEmail"
            >
              vmware.Github
            </Link>
          </ListItem>
          <ListItem mb="10px">
            <Meta>TECHNOLOGIES USED</Meta>
            <span>HTML & CSS</span>
          </ListItem>
        </List>
        <Image
          src="/assests/images/Godaddy_Full_image.png"
          alt="GoDaddy"
          loading="eager"
          placeholder="blur"
          boxShadow="dark-lg"
          mx="auto"
          mt={5}
          width="600px"
        />
      </Box>
    </Layout>
  );
};

export default GoDaddyDetails;
