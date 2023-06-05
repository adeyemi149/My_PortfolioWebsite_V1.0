import Layout from "@/src/components/Layout/layout";
import React from "react";
import { Box, List, ListItem, Link, Text, SimpleGrid } from "@chakra-ui/react";
import Title from "@/src/components/title/title";
import Meta from "@/src/components/meta/meta";
import { LinkIcon } from "@chakra-ui/icons";
import WorkGridItem from "@/src/components/workGridItem/WorkGridItem";
import { VmwareLandingPage } from "../../public/images";

const CloudHive = () => {
  return (
    <Layout>
      <Box
        maxW={{ sm: "550px", md: "700px", lg: "1140px" }}
        py="5rem"
        mx="auto"
        mt={20}
      >
        <Title>CloudHive</Title>
        <Text mt={5} textIndent={15}>
          A Landing Page for CloudHosting Website
        </Text>
        <List mt={5}>
          <ListItem mb="10px">
            <Meta>VIEW DEMO</Meta>
            <Link href="">vmware.netlify.com</Link>
            <LinkIcon ml={1} color="#ff506f" />
          </ListItem>
          <ListItem mb="10px">
            <Meta>SOURCE CODE</Meta>
            <Link target="_blank" href="https://github.com/adeyemi149/VMware">
              vmware.Github
            </Link>
          </ListItem>
          <ListItem mb="10px">
            <Meta>STACK</Meta>
            <span>React, Tailwind CSS, Jest</span>
          </ListItem>
        </List>
        <SimpleGrid mt={4} columns={[1, 1, 2]} gap={6}>
          <WorkGridItem
            thumbnail={VmwareLandingPage.default.src}
            title="CloudHive"
          />
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default CloudHive;
